import { createClient } from "@supabase/supabase-js"
import { chapters, sections, cards, questions } from "../lib/content"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const sb = createClient(url, key)

async function main() {
  await sb.from("chapters").upsert(chapters)
  await sb.from("sections").upsert(sections)
  await sb.from("cards").upsert(cards)
  await sb.from("questions").upsert(questions)
  console.log("Seeded")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})


