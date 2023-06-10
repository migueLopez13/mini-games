import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as gameService from '../game-service'
import { mockMatrix, mockProverb } from './mocks'
import * as apiProverb from '../api'
import game from '../store.ts'
import * as utils from '../utils.ts'

vi.mock('../store.ts')

describe('game service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('startGame', () => {
    it('Calls the api, generates the matrix and set the store', async () => {
      vi.spyOn(apiProverb, 'getProverb').mockResolvedValue(mockProverb)

      await gameService.startGame()
      expect(apiProverb.getProverb).toHaveBeenCalled()
      expect(game.setProverb).toHaveBeenCalledWith(mockProverb)
      expect(game.setProverbMatrix).toBeCalledWith(mockMatrix)
      expect(game.start).toBeCalled()
    })
  })

  describe('discoverLetter', () => {
    it('add the letter discovered to the store if it is a valid letter and is not included already', () => {
      gameService.discoverLetter('A')
      expect(game.addSelectedLetter).toHaveBeenCalledWith('A')
    })

    it('does nothing if the letter is not valid', () => {
      gameService.discoverLetter('?')
      expect(game.addSelectedLetter).toHaveBeenCalledTimes(0)
    })

    it('does nothing if the letter is already included', () => {
      game.selectedLetters = ['A']
      gameService.discoverLetter('A')
      expect(game.addSelectedLetter).toHaveBeenCalledTimes(0)
    })
  })

  describe('userTry', () => {
    it('does nothing if the guessed proverb is empty', () => {
      vi.spyOn(utils, 'removeAccentMarks')
      gameService.userTry('')
      expect(utils.removeAccentMarks).toBeCalledTimes(0)
    })
  })

  describe('isCorrectLetter', () => {
    it('checks whether the letter is included in the proverb', () => {
      expect(gameService.isCorrectLetter('a')).toBeFalsy()
      // expect(gameService.isCorrectLetter('t')).toBeTruthy()
    })
  })
})
