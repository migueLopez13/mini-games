import { type Ref, ref } from 'vue'
import type { proverb } from './definitions.js'

function matrixFromProverb(proverb: string): proverb {
  return proverb
    .split(' ')
    .map(word => word.split('').map(letter => ({ value: letter, hide: true })))
}

class ProverbGame {
  private readonly proverb = ref<string>('')
  private readonly _gameIsFinished = ref<boolean>(false)

  public tries = ref<number>(4)
  public lettersSelected = ref<string[]>([])
  public proverbMatrix = ref<proverb>()

  private showProverb(): void {
    this.proverbMatrix.value = this.proverbMatrix.value.map(word =>
      word.map(letter => ({
        ...letter,
        hide: false
      }))
    )
  }

  private async getProverb(): Promise<void> {
    const proverbList = await fetch('http://localhost:8001/api/proverbs/')
      .then(async response => await response.json())
      .then(data => data)

    this.proverb.value =
      proverbList[Math.floor(Math.random() * proverbList.length)]
  }

  async startGame(): Promise<void> {
    await this.getProverb()
    this.proverbMatrix.value = matrixFromProverb(this.proverb.value)
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
        hide: !this.lettersSelected.value.includes(letter.value)
      }))
    )
  }

  private isProverbCorrect(proverbTried: string): boolean {
    return (
      proverbTried.trim().toLowerCase() ===
      this.proverb.value.trim().toLowerCase()
    )
  }

  userTry(proverbTried: string): void {
    if (proverbTried === '') return
    if (this.isProverbCorrect(proverbTried)) {
      this.showProverb()
      this.gameIsFinished.value = true
    }
    this.tries.value--

    if (this.tries.value === 0) this.gameIsFinished.value = true
  }

  get gameIsFinished(): Ref<boolean> {
    return this._gameIsFinished
  }
}

export default new ProverbGame()
