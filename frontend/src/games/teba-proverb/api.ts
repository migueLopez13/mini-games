import { proverb } from './definitions'

const apiUrl = import.meta.env.VITE_API_URL

export async function getProverb(): Promise<proverb> {
  return await fetch(`http://${apiUrl}/api/proverbs/`)
    .then(async response => await response.json())
    .then(data => data)
}
