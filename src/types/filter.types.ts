const DURATION = {
    LESS_THAN_FIVE: 5,
    LESS_THAN_TEN:10,
    MORE_OR_EQUAL_TEN:10
} as const 

export type LevelType = 'easy'|'difficult' | 'moderate'

export { DURATION }

