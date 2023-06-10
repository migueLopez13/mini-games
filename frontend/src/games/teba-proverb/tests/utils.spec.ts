import { describe, expect, it } from 'vitest'
import { capitalize, removeAccentMarks } from '../utils'

describe('utils functions', () => {
  describe('remove accents marks', () => {
    it('removes accent marks when given a string containing some', () => {
      expect(removeAccentMarks('áÉiou')).toBe('aEiou')
    })
    it('returns an empty string when no argument passed', () => {
      expect(removeAccentMarks(undefined)).toBe('')
    })
  })

  describe('capitalize', () => {
    it('capitalize the first word of a text ', () => {
      expect(capitalize('hello world')).toBe('Hello world')
    })
    it('returns an empty string when no argument passed', () => {
      expect(capitalize(undefined)).toBe('')
    })
  })
})
