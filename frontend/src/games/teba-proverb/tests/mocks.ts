import { proverb, proverbWord } from '@/games/teba-proverb/definitions'

export const mockProverb: proverb = {
  value: 'test mock',
  description: 'description'
}
export const mockMatrix: proverbWord[] = [
  [
    {
      hide: true,
      value: 'T'
    },
    {
      hide: true,
      value: 'E'
    },
    {
      hide: true,
      value: 'S'
    },
    {
      hide: true,
      value: 'T'
    }
  ],
  [
    {
      hide: true,
      value: 'M'
    },
    {
      hide: true,
      value: 'O'
    },
    {
      hide: true,
      value: 'C'
    },
    {
      hide: true,
      value: 'K'
    }
  ]
]

export const mockUpdatedMatrix: proverbWord[] = [
  [
    {
      hide: false,
      value: 'T'
    },
    {
      hide: true,
      value: 'E'
    },
    {
      hide: true,
      value: 'S'
    },
    {
      hide: false,
      value: 'T'
    }
  ],
  [
    {
      hide: true,
      value: 'M'
    },
    {
      hide: true,
      value: 'O'
    },
    {
      hide: true,
      value: 'C'
    },
    {
      hide: true,
      value: 'K'
    }
  ]
]

export const mockFinishedMatrix: proverbWord[] = [
  [
    {
      hide: false,
      value: 'T'
    },
    {
      hide: false,
      value: 'E'
    },
    {
      hide: false,
      value: 'S'
    },
    {
      hide: false,
      value: 'T'
    }
  ],
  [
    {
      hide: false,
      value: 'M'
    },
    {
      hide: false,
      value: 'O'
    },
    {
      hide: false,
      value: 'C'
    },
    {
      hide: false,
      value: 'K'
    }
  ]
]

export const mockMatrixWithMarks = [
  [
    {
      hide: true,
      value: 'A'
    },
    {
      hide: true,
      value: '?'
    }
  ]
]

export const expectedMockMatrixWithMarks = [
  [
    {
      hide: true,
      value: 'A'
    },
    {
      hide: false,
      value: '?'
    }
  ]
]
