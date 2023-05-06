import { ref } from "vue";
import { proverbWord } from "../types/types.ts";
import proverbApi from "../api/api-proverb.ts";

function matrixFromProverb(proverb): Array<proverbWord> {
  return proverb
    .split(" ")
    .map((word) =>
      word.split("").map((letter) => ({ value: letter, hide: true }))
    );
}

class ProverbGame {
  private proverb = ref<string>("");
  private _gameIsFinished = ref<boolean>(false);

  public tries = ref<number>(4);
  public lettersSelected = ref<string[]>([]);
  public proverbMatrix = ref<Array<proverbWord>>();

  constructor() {}

  private showProverb() {
    this.proverbMatrix.value = this.proverbMatrix.value.map((word) =>
      word.map((letter) => ({
        ...letter,
        hide: false,
      }))
    );
  }

  async startGame() {
    const saying = await proverbApi.getProverb();
    this.proverb.value = saying;
    this.proverbMatrix.value = matrixFromProverb(saying);
    this.lettersSelected.value = [];
    this.tries.value = 4;
    this._gameIsFinished.value = false;
  }

  discoverLetter(letterToDiscover) {
    this.lettersSelected.value.push(letterToDiscover);

    this.proverbMatrix.value = this.proverbMatrix.value.map((word) =>
      word.map((letter) => ({
        ...letter,
        hide: !this.lettersSelected.value.includes(letter.value),
      }))
    );
  }

  userTry(proverbTried): void {
    if (
      proverbTried.trim().toLowerCase() ===
      this.proverb.value.trim().toLowerCase()
    ) {
      this.showProverb();
      this.gameIsFinished.value = true;
    }

    this.tries.value--;

    if (!this.tries.value) this.gameIsFinished.value = true;
  }

  get gameIsFinished() {
    return this._gameIsFinished;
  }
}

export default new ProverbGame();
