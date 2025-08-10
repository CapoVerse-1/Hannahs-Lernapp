import { z } from "zod"

export const ModeEnum = z.enum(["full", "fast"])

export const Profile = z.object({
  id: z.string().uuid().optional(),
  created_at: z.string().datetime().optional(),
  display_name: z.string().optional(),
  mode: ModeEnum.default("full"),
  streak: z.number().default(0),
  device_id: z.string()
})
export type ProfileT = z.infer<typeof Profile>

export const Chapter = z.object({
  id: z.number().int().min(1).max(8),
  title: z.string(),
  eta_minutes: z.number().int(),
  order_index: z.number().int()
})
export type ChapterT = z.infer<typeof Chapter>

export const Section = z.object({
  id: z.string(),
  chapter_id: z.number().int(),
  title: z.string(),
  order_index: z.number().int()
})
export type SectionT = z.infer<typeof Section>

export const Card = z.object({
  id: z.string(),
  section_id: z.string(),
  front_md: z.string(),
  back_md: z.string(),
  hint_md: z.string().optional(),
  order_index: z.number().int()
})
export type CardT = z.infer<typeof Card>

export const Option = z.object({
  id: z.string(),
  label: z.string(),
  md: z.string(),
  isCorrect: z.boolean()
})
export type OptionT = z.infer<typeof Option>

export const Question = z.object({
  id: z.string(),
  chapter_id: z.number().int(),
  stem_md: z.string(),
  options: z.array(Option),
  explanation_md: z.string(),
  tags: z.array(z.string()).default([])
})
export type QuestionT = z.infer<typeof Question>

export const SessionRow = z.object({
  id: z.string().optional(),
  profile_id: z.string().optional(),
  chapter_id: z.number().int(),
  started_at: z.string().datetime(),
  ended_at: z.string().datetime().optional(),
  mode: ModeEnum,
  duration_minutes: z.number().int().optional()
})
export type SessionRowT = z.infer<typeof SessionRow>

export const AttemptRow = z.object({
  id: z.string().optional(),
  session_id: z.string(),
  question_id: z.string(),
  selected_option_id: z.string(),
  is_correct: z.boolean(),
  attempt_index: z.number().int(),
  answered_at: z.string().datetime()
})
export type AttemptRowT = z.infer<typeof AttemptRow>

export const ProgressRow = z.object({
  profile_id: z.string(),
  chapter_id: z.number().int(),
  learned_count: z.number().int().default(0),
  correct_count: z.number().int().default(0),
  wrong_count: z.number().int().default(0),
  mastery_pct: z.number().default(0),
  last_active_at: z.string().datetime().optional()
})
export type ProgressRowT = z.infer<typeof ProgressRow>

export const ReviewRow = z.object({
  id: z.string().optional(),
  profile_id: z.string(),
  from_chapter_id: z.number().int(),
  to_chapter_id: z.number().int(),
  scheduled_at: z.string().datetime(),
  duration_goal: z.number().int().default(15)
})
export type ReviewRowT = z.infer<typeof ReviewRow>

export const ExplainRequest = z.object({
  type: z.enum(["summary", "card", "question"]),
  payload: z.any(),
  locale: z.string().default("de"),
  chapter: z.number().int().min(1).max(8).default(1)
})


