import { proverb } from './definitions'

export async function getProverb(): Promise<proverb> {
  return await fetch('http://localhost:8001/api/proverbs/')
    .then(async response => await response.json())
    .then(data => data)
}
