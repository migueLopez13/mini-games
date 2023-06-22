import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { proverb, proverbWord, marks, proverbLetter } from './definitions.js'
import { capitalize, removeAccentMarks } from './utils.js'
import pinia from '../../plugins/pinia.ts'

const useProverbGameStore = defineStore('proverbGame', () => {
  const proverb = ref<proverb>({} as proverb)
  const proverbMatrix = ref<proverbWord[]>([])
  const isFinished = ref<boolean>(false)
  const tries = ref<number>(4)
  const selectedLetters = ref<string[]>([])
  const skipLetters = ref<boolean>(false)
  const openConfirmSkip = ref<boolean>(false)
  const userGuess = ref<string>('')

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
