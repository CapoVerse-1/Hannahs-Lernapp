import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
export const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = supabaseUrl && supabaseAnon
  ? createClient(supabaseUrl, supabaseAnon, { auth: { persistSession: true, autoRefreshToken: true } })
  : null

export function getSupabaseForDevice(deviceId: string): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnon) return null
  return createClient(supabaseUrl, supabaseAnon, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { "x-device-id": deviceId } }
  })
}

