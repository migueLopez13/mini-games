import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mockProverb } from './mocks'
import * as gameService from '@/games/teba-proverb/game-service'
import * as apiProverb from '@/games/teba-proverb/api'
import game from '@/games/teba-proverb/store.ts'
import * as utils from '@/games/teba-proverb/utils.ts'

describe('game service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('startGame', () => {
    it('Calls the api, generates the matrix and set the store', async () => {
      vi.spyOn(apiProverb, 'getProverb').mockResolvedValue(mockProverb)
      vi.spyOn(game, 'setProverb')
      vi.spyOn(game, 'setProverbMatrix')
      vi.spyOn(game, 'start')

      await gameService.startGame()
      expect(apiProverb.getProverb).toHaveBeenCalled()
      expect(game.setProverb).toHaveBeenCalledWith(mockProverb)
      expect(game.setProverbMatrix).toHaveBeenCalled()
      expect(game.start).toBeCalled()
    })
  })

  describe('discoverLetter', () => {
    vi.spyOn(game, 'addSelectedLetter')

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
      game.setProverb({ value: 'aaaaaa', description: '' })

      expect(gameService.isCorrectLetter('B')).toBeFalsy()
      expect(gameService.isCorrectLetter('A')).toBeTruthy()
    })
  })
})
