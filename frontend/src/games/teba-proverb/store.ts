import { defineStore } from 'pinia'
import { computed } from 'vue'
import { proverb, proverbWord, marks, proverbLetter } from './definitions.js'
import { capitalize, removeAccentMarks } from './utils.js'
import pinia from '../../plugins/pinia.ts'
import { useLocalStorage } from '@vueuse/core'

const useProverbGameStore = defineStore('proverbGame', () => {
  const proverb = useLocalStorage('proverb', {} as proverb)
  const proverbMatrix = useLocalStorage('proverbMatrix', [] as proverbWord[])
  const isFinished = useLocalStorage('isFinished', false)
  const tries = useLocalStorage('tries', 4)
  const selectedLetters = useLocalStorage('selectedLetters', [] as string[])
  const skipLetters = useLocalStorage('skipLetters', false)
  const openConfirmSkip = useLocalStorage('openConfirmSkip', false)
  const userGuess = useLocalStorage('userGuess', '')

  const getProverb = computed(() => {
    return proverb.value.value
  })

  const getProverbDescription = computed(() => {
    return `''${capitalize(proverb.value.description)}''`
  })

  function isLetterHidden(letter: proverbLetter) {
    return (
      !isFinished.value &&
      !selectedLetters.value.includes(letter.value) &&
      !marks.includes(letter.value)
    )
  }

  const getProverbMatrix = computed(() => {
    return proverbMatrix.value.map(word =>
      word.map(letter => ({
        ...letter,
        hide: isLetterHidden(letter)
      }))
    )
  })

  const getInputError = computed(() => {
    return tries.value < 4 && !isFinished.value
  })

  function setProverb(nextProverb: proverb) {
    const value = removeAccentMarks(nextProverb.value).toUpperCase()
    proverb.value = { ...nextProverb, value }
  }

  function setIsFinished(value: boolean) {
    isFinished.value = value
  }

  function setSkipLetters(value: boolean) {
    skipLetters.value = value
  }

  function setProverbMatrix(matrix: proverbWord[]) {
    proverbMatrix.value = matrix
  }

  function setOpenConfirmSkip(value: boolean) {
    openConfirmSkip.value = value
  }

  function addSelectedLetter(letter: string) {
    selectedLetters.value = [...selectedLetters.value, letter]
  }

  function resetTries() {
    tries.value = 4
  }

  function resetSelectedLetters() {
    selectedLetters.value = []
  }

  function resetUserGuess() {
    userGuess.value = ''
  }

  function start() {
    resetSelectedLetters()
    resetTries()
    setIsFinished(false)
    setSkipLetters(false)
    resetUserGuess()
  }

  return {
    proverb,
    userGuess,
    isFinished,
    getProverb,
    tries,
    selectedLetters,
    proverbMatrix,
    skipLetters,
    openConfirmSkip,
    getInputError,
    getProverbMatrix,
    getProverbDescription,
    setOpenConfirmSkip,
    start,
    setProverb,
    setIsFinished,
    setSkipLetters,
    setProverbMatrix,
    addSelectedLetter,
    resetUserGuess
  }
})

export default useProverbGameStore(pinia)
