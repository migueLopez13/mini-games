export interface keyboardLetter {
  value: string
  selected: boolean
}

export interface proverbLetter {
  value: string
  hide: boolean
}

export type proverbWord = proverbLetter[]
