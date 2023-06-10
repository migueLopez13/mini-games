import { letters, marks, proverb, proverbWord } from './definitions.js'
import { removeAccentMarks } from './utils.js'
import game from './store.ts'

function generateProverbMatrix(proverb: proverb): proverbWord[] {
  return proverb.proverb.split(' ').map(word =>
    word.split('').map(letter => ({
      value: letter.toUpperCase(),
      hide: !marks.includes(letter)
    }))
  )
}

async function getProverb(): Promise<proverb> {
  return await fetch('http://localhost:8001/api/proverbs/')
    .then(async response => await response.json())
    .then(data => data)
}

export async function startGame(): Promise<void> {
  const proverb = await getProverb()
  const matrix = generateProverbMatrix(proverb)

  game.setProverb(proverb)
  game.setProverbMatrix(matrix)
  game.start()
}

export function discoverLetter(letterToDiscover: string): void {
  if (
    game.selectedLetters.includes(letterToDiscover) ||
    !letters.includes(letterToDiscover)
  )
    return

  game.addSelectedLetter(letterToDiscover)
}

export function isProverbCorrect(proverbTried: string): boolean {
  return proverbTried.toUpperCase() === game.getProverb
}

export function userTry(proverbTried: string): void {
  if (proverbTried === '') return

  const fixedTry = removeAccentMarks(proverbTried)
  if (isProverbCorrect(fixedTry)) {
    game.setIsFinished(true)
    return
  }

  game.tries--

  if (game.tries === 0) {
    game.setIsFinished(true)
    return
  }
  game.resetUserGuess()
}

export function isCorrectLetter(letter: string) {
  return game.getProverb.includes(letter)
}
