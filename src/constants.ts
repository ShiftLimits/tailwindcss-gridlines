import { generateFractionUtil, generateRange } from './utils'

export const DEFAULT_BASE = '24px'
export const DEFAULT_RULE_COLOR = 'rgba(255,255,255, 0.2)'
export const DEFAULT_RULE_SECONDARY_COLOR = 'rgba(255,255,255, 0.1)'
export const SVG_CELL_SIZE = 100

export const UNIT_FRACTIONS = generateRange(0, 1, { denominators: [2,3,4,5,8] })

export const FRACTIONS_1_TO_2 = generateRange(1, 2, { denominators: [2,3,4], inclusive: false })

export const FRACTIONS_1_TO_5 = {
  ...FRACTIONS_1_TO_2,
  ...generateRange(2, 5, { denominators: [2,4], inclusive: false })
}

export const PERCENTAGES = {
  '8.33%': '8.333333%',
  '10%': '10%',
  '16.66%': '16.666667%',
  '20%': '20%',
  '25%': '25%',
  '30%': '30%',
  '33.33%': '33.333333%',
  '40%': '40%',
  '41.66%': '41.666667%',
  '50%': '50%',
  '58.33%': '58.333333%',
  '60%': '60%',
  '66.66%': '66.666667%',
  '70%': '70%',
  '75%': '75%',
  '80%': '80%',
  '83.33%': '83.333333%',
  '90%': '90%',
  '91.66%': '91.666667%',
  '100%': '100%',
} 

export const PERCENTAGES_FRACTIONS = {
  '1/2%': '50%',
  '1/3%': '33.333333%',
  '2/3%': '66.666667%',
  '1/4%': '25%',
  '2/4%': '50%',
  '3/4%': '75%',
  '1/5%': '20%',
  '2/5%': '40%',
  '3/5%': '60%',
  '4/5%': '80%',
  '1/6%': '16.666667%',
  '2/6%': '33.333333%',
  '3/6%': '50%',
  '4/6%': '66.666667%',
  '5/6%': '83.333333%',
  '1/12%': '8.333333%',
  '2/12%': '16.666667%',
  '3/12%': '25%',
  '4/12%': '33.333333%',
  '5/12%': '41.666667%',
  '6/12%': '50%',
  '7/12%': '58.333333%',
  '8/12%': '66.666667%',
  '9/12%': '75%',
  '10/12%': '83.333333%',
  '11/12%': '91.666667%',
}