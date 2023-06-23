import { describe, it, expect } from 'vitest'
import game from '../store.ts'
import {
  expectedMockMatrixWithMarks,
  mockFinishedMatrix,
  mockMatrix,
  mockMatrixWithMarks,
  mockUpdatedMatrix
} from './mocks.ts'

describe('store', () => {
  describe('getProverbDescription', () => {
    it('returns the capitalized description properly formatted', () => {
      game.setProverb({ value: 'test', description: 'test description' })
      expect(game.getProverbDescription).toEqual("''Test description''")
    })
    it('returns empty quotes if there is no description', () => {
      game.setProverb({ value: 'test', description: '' })
      expect(game.getProverbDescription).toEqual("''''")
    })
  })

  describe('getProverbMatrix', () => {
    game.setProverbMatrix(mockMatrix)

    it('returns the updated proverb matrix when letter is selected', () => {
      expect(game.getProverbMatrix).toEqual(mockMatrix)
      game.addSelectedLetter('T')
      expect(game.getProverbMatrix).toEqual(mockUpdatedMatrix)
    })

    it('returns the proverb matrix with all letters discovered when game is finished', () => {
      game.setIsFinished(true)
      expect(game.getProverbMatrix).toEqual(mockFinishedMatrix)
    })

    it('returns the proverb matrix with marks discovered', () => {
      game.setIsFinished(false)
      game.setProverbMatrix(mockMatrixWithMarks)
      expect(game.getProverbMatrix).toEqual(expectedMockMatrixWithMarks)
    })
  })

  describe('getInputError', () => {
    it('returns the error state of the input', () => {
      expect(game.getInputError).toBe(false)

      game.tries--
      expect(game.getInputError).toBe(true)

      game.setIsFinished(true)
      expect(game.getInputError).toBe(false)
    })
  })
})
