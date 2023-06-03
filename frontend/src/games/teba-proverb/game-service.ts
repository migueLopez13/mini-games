import { type Ref, ref } from 'vue'
import { marks, proverb, proverbWord } from './definitions.js'
import { removeAccentMarks } from './utils.js'

function matrixFromProverb(proverb: string): proverbWord[] {
  const fixedProverb = removeAccentMarks(proverb.toUpperCase())
  return fixedProverb
    .split(' ')
    .map(word =>
      word
        .split('')
        .map(letter => ({ value: letter, hide: !marks.includes(letter) }))
    )
}

class ProverbGame {
  private readonly _gameIsFinished = ref<boolean>(false)
  private proverb = ref<proverb>()
  public tries = ref<number>(4)
  public lettersSelected = ref<string[]>([])
  public proverbMatrix = ref<proverbWord[]>()

  private showProverb(): void {
    this.proverbMatrix.value = this.proverbMatrix.value.map(word =>
      word.map(letter => ({
        ...letter,
        hide: false
      }))
    )
  }

  private async getProverb(): Promise<proverb> {
    return await fetch('http://localhost:8001/api/proverbs/')
      .then(async response => await response.json())
      .then(data => data)
  }

  private getProverbValue() {
    return removeAccentMarks(this.proverb.value.proverb).toLowerCase()
  }

  async startGame(): Promise<void> {
    this.proverb.value = await this.getProverb()
    this.proverbMatrix.value = matrixFromProverb(this.proverb.value.proverb)
    this.lettersSelected.value = []
    this.tries.value = 4
    this._gameIsFinished.value = false
  }

  discoverLetter(letterToDiscover: string): void {
    if (this.lettersSelected.value.includes(letterToDiscover)) return
    this.lettersSelected.value.push(letterToDiscover)

    this.proverbMatrix.value = this.proverbMatrix.value.map(word =>
      word.map(letter => ({
        ...letter,
        hide:
          !this.lettersSelected.value.includes(letter.value) &&
          !marks.includes(letter.value)
      }))
    )
  }

  private isProverbCorrect(proverbTried: string): boolean {
    return proverbTried.toLowerCase() === this.getProverbValue()
  }

  userTry(proverbTried: string): void {
    if (proverbTried === '') return

    if (this.isProverbCorrect(proverbTried)) {
      this.showProverb()
      this.gameIsFinished.value = true
      return
    }

    this.tries.value--

    if (this.tries.value === 0) {
      this.showProverb()
      this.gameIsFinished.value = true
    }
  }

  get gameIsFinished(): Ref<boolean> {
    return this._gameIsFinished
  }

  get proverbDescription(): String {
    return this.proverb.value?.description
  }
}

export default new ProverbGame()
