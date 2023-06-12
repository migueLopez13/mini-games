export interface keyboardLetter {
  value: string
  selected: boolean
}

export interface proverbLetter {
  value: string
  hide: boolean
}

export type proverbWord = proverbLetter[]

export interface proverb {
  proverb: string
  description: string
}

export const pageTitle = 'Refranero de teba'
export const lettersRows = ['QWERTYUIOP', 'ASDFGHJKLÑ', 'ZXCVBNM']
export const letters = lettersRows.join('').replace(',', '')
export const infoText = 'Descubre 5 letras:'
export const infoTooltip =
  'Para deshacer la selección vuelve a pulsar la letra seleccionada'
export const attempsRemaining = 'Intentos restantes'
export const gameOver = 'Perdiste! Te falta campo.'
export const gameWinner = 'Ere un maquina as ganao bro!'
export const guessTheSaying = 'Adivina el refrán'

export const marks = [',', '.', '¿', '?']
