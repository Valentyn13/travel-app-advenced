const  DURATION =  {
    LESS_THAN_FIVE :'0_x_5',
    FIVE_TO_TEN :'5_x_10',
    MORE_OR_EQUAL_TEN :'10',
    UNACTIVE : ''
} as const

const LEVEL = {
    EASY:'easy',
    MODERATE:'moderate',
    DIFFICULT:'difficult',
    UNACTIVE:''
} as const

export type DurationType = typeof DURATION
export type LevelType = 'easy'|'difficult' | 'moderate'

export { DURATION, LEVEL }
