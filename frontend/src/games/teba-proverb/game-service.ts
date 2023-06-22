import { letters, marks, proverbWord } from './definitions.js'
import { removeAccentMarks } from './utils.js'
import game from './store.ts'
import { getProverb } from './api.ts'

function generateProverbMatrix(): proverbWord[] {
  if (!game.proverb.value) return []
  return game.proverb.value.split(' ').map(word =>
    word.split('').map(letter => ({
      value: letter.toUpperCase(),
      hide: !marks.includes(letter)
    }))
  )
}

export async function startGame(): Promise<void> {
  const proverb = await getProverb()
  game.setProverb(proverb)
  const matrix = generateProverbMatrix()
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

function isProverbCorrect(proverbTried: string): boolean {
  return proverbTried.toUpperCase() === game.getProverb
}

export function userTry(proverbTried: string): void {
  if (!proverbTried || proverbTried === '') return

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
