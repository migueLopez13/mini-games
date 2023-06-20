import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_API_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
console.log(supabaseKey, supabaseUrl, import.meta.env.VITE_PROJECT_NAME)
export const supabase = createClient(supabaseUrl, supabaseKey)
