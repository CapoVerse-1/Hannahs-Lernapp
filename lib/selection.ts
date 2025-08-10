import { QuestionT } from "./schemas"

export function sampleQuestionsForMode(all: QuestionT[], mode: "full" | "fast"): QuestionT[] {
  if (mode === "full") return shuffleStable(all)
  const byTag = new Map<string, QuestionT[]>()
  for (const q of all) {
    const tag = q.tags[0] || "misc"
    if (!byTag.has(tag)) byTag.set(tag, [])
    byTag.get(tag)!.push(q)
  }
  const out: QuestionT[] = []
  for (const [, arr] of byTag) {
    const take = Math.max(1, Math.ceil(arr.length * 0.6))
    out.push(...shuffleStable(arr).slice(0, take))
  }
  return shuffleStable(out)
}

export function shuffleStable<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export type MagicFlowItem = {
  id: string
  baseDifficulty: number // 1..5
  tag: string
}

// Magic flow ordering: interleave tags, spiral difficulty, and insert periodic review anchors
export function buildMagicOrder(questions: QuestionT[]): string[] {
  const items: MagicFlowItem[] = questions.map((q) => ({
    id: q.id,
    baseDifficulty: estimateDifficulty(q),
    tag: q.tags[0] || "misc"
  }))
  const byTag = new Map<string, MagicFlowItem[]>()
  for (const it of items) {
    const k = it.tag
    if (!byTag.has(k)) byTag.set(k, [])
    byTag.get(k)!.push(it)
  }
  for (const [, arr] of byTag) arr.sort((a, b) => a.baseDifficulty - b.baseDifficulty)
  const tagKeys = [...byTag.keys()].sort()
  const order: string[] = []
  let ring = 0
  while (true) {
    let pushed = false
    for (const t of tagKeys) {
      const arr = byTag.get(t)!
      const pickIndex = Math.min(ring, arr.length - 1)
      if (arr[pickIndex] && !order.includes(arr[pickIndex].id)) {
        order.push(arr[pickIndex].id)
        pushed = true
      }
    }
    if (!pushed) break
    ring += 1
    // Periodic review anchor every 5 items: back-reference an earlier id to repeat soon
    if (order.length % 5 === 0 && order.length > 5) {
      order.push(order[Math.floor(order.length / 2) - 1])
    }
  }
  // De-duplicate in case of anchors
  const seen = new Set<string>()
  return order.filter((id) => (seen.has(id) ? false : (seen.add(id), true)))
}

function estimateDifficulty(q: QuestionT): number {
  // Temp heuristic using option count and number of correct answers
  const total = q.options.length
  const correct = q.options.filter((o) => o.isCorrect).length
  const ratio = correct / Math.max(1, total)
  // Multi-correct with many options ⇒ harder
  if (total >= 5 && correct >= 2) return 4
  if (total >= 4 && correct >= 2) return 3
  if (ratio === 1 || ratio === 0) return 2
  return 2
}


