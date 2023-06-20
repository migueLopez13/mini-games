import { supabase } from '../../plugins/supabase.ts'
import { proverb } from './definitions'

export async function getProverb(): Promise<proverb> {
  const { data } = await supabase
    .from('random_proverb')
    .select('value, description')
    .single()
  return data as proverb
}
