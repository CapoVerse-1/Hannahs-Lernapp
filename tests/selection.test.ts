import { sampleQuestionsForMode } from "../lib/selection"
import type { QuestionT } from "../lib/schemas"

const makeQ = (id: string, tag: string): QuestionT => ({
  id,
  chapter_id: 1,
  stem_md: "s",
  options: [
    { id: "a", label: "a", md: "A", isCorrect: true },
    { id: "b", label: "b", md: "B", isCorrect: false }
  ],
  explanation_md: "e",
  tags: [tag]
})

test("fast mode keeps ~60% with tag coverage", () => {
  const all: QuestionT[] = [
    makeQ("1", "t1"),
    makeQ("2", "t1"),
    makeQ("3", "t2"),
    makeQ("4", "t2"),
    makeQ("5", "t3")
  ]
  const fast = sampleQuestionsForMode(all, "fast")
  const tags = new Set(fast.map((q) => q.tags[0]))
  expect(tags.size).toBeGreaterThanOrEqual(3)
  expect(fast.length).toBeGreaterThanOrEqual(Math.ceil(all.length * 0.6) - 1)
})

test("full mode returns all", () => {
  const all: QuestionT[] = [makeQ("1", "a"), makeQ("2", "b")]
  const full = sampleQuestionsForMode(all, "full")
  expect(full.length).toBe(2)
})


