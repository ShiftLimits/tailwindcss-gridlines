import plugin from 'tailwindcss/plugin'
import preflight from './plugins/preflight'
import gridlines from './plugins/gridlines'
import unit from './plugins/unit'
import { DEFAULT_BASE, FRACTIONS_1_TO_2, FRACTIONS_1_TO_5, PERCENTAGES, PERCENTAGES_FRACTIONS, UNIT_FRACTIONS, DEFAULT_RULE_COLOR, DEFAULT_RULE_SECONDARY_COLOR } from './constants';
import { generateFractionUtil, generateUnitMultipleString, generateUnitConfig, generateRange } from './utils';


module.exports = plugin(function(api:any) {
  const plugins = [preflight, gridlines, unit]
  for (let plugin of plugins) plugin(api)
}, {
  theme: {
    base: DEFAULT_BASE,
    unit: generateUnitConfig([
      '1/5',
      '2/5',
      '3/5',
      '4/5',
      '1/4',
      '2/4',
      '3/4',
      '1/3',
      '2/3',
      '1/2',
      '1',
      '1 1/8',
      '1 2/8',
      '1 3/8',
      '1 4/8',
      '1 5/8',
      '1 6/8',
      '1 7/8',
      '1 1/5',
      '1 2/5',
      '1 3/5',
      '1 4/5',
      '1 1/4',
      '1 2/4',
      '1 3/4',
      '1 1/3',
      '1 2/3',
      '1 1/2',
      '2',
      '2 1/4',
      '2 2/4',
      '2 3/4',
      '2 1/3',
      '2 2/3',
      '2 1/2',
      '3'
    ]),
    spacing: {
      px: '1px',
      '0': '0',
      ...UNIT_FRACTIONS,
      ...FRACTIONS_1_TO_5,
      ...generateRange(5, 60, { denominators: [2,4], inclusive: false })
    },
    borderRadius: {
      none: '0',
      ...UNIT_FRACTIONS,
      ...FRACTIONS_1_TO_5,
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      ...UNIT_FRACTIONS
		},
    strokeWidth: {
        DEFAULT: '1px',
        '0': '0',
        ...UNIT_FRACTIONS
    },
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      ...negative(PERCENTAGES),
      ...negative(PERCENTAGES_FRACTIONS),
      '-full': '-100%',
    }),
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      ...UNIT_FRACTIONS,
      ...FRACTIONS_1_TO_5,
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      ...theme('spacing'),
      ...theme('screens'),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      '1/4-screen': '25vw',
      '1/3-screen': '33vw',
      '1/2-screen': '50vw',
      '2/3-screen': '66vw',
      '3/4-screen': '75vw',
      screen: '100vw',
    }),
    minWidth: (theme) => ({
      '0': '0',
      ...theme('spacing'),
      ...theme('screens'),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      '1/4-screen': '25vw',
      '1/3-screen': '33vw',
      '1/2-screen': '50vw',
      '2/3-screen': '66vw',
      '3/4-screen': '75vw',
      screen: '100vw',
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('screens'),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      '1/4-screen': '25vw',
      '1/3-screen': '33vw',
      '1/2-screen': '50vw',
      '2/3-screen': '66vw',
      '3/4-screen': '75vw',
      screen: '100vw',
    }),
    maxHeight: (theme) => ({
      none: 'none',
      ...theme('spacing'),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      '1/4-screen': '25vh',
      '1/3-screen': '33vh',
      '1/2-screen': '50vh',
      '2/3-screen': '66vh',
      '3/4-screen': '75vh',
      screen: '100vh',
    }),
    minHeight: (theme) => ({
      '0': '0',
      ...theme('spacing'),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      '1/4-screen': '25vh',
      '1/3-screen': '33vh',
      '1/2-screen': '50vh',
      '2/3-screen': '66vh',
      '3/4-screen': '75vh',
      screen: '100vh',
    }),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      '1/4-screen': '25vh',
      '1/3-screen': '33vh',
      '1/2-screen': '50vh',
      '2/3-screen': '66vh',
      '3/4-screen': '75vh',
      screen: '100vh',
    }),
    gridlines: {
      ruleColor: DEFAULT_RULE_COLOR,
      ruleSecondaryColor: DEFAULT_RULE_SECONDARY_COLOR
    },
    ringOffsetWidth: {
      '0': '0',
      'px': '1px',
      ...UNIT_FRACTIONS
    },
    ringWidth: {
      DEFAULT: generateUnitMultipleString(0.125),
      '0': '0',
      'px': '1px',
      ...UNIT_FRACTIONS
    },
    outlineOffset: {
      '0': '0',
      'px': '1px',
      ...UNIT_FRACTIONS
    },
    outlineWidth: {
      '0': '0',
      'px': '1px',
      ...UNIT_FRACTIONS
    },
    textIndent: (theme, { negative }) => ({
      ...theme('lineHeight'),
      ...negative(theme('lineHeight'))
    }),
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...PERCENTAGES,
      ...PERCENTAGES_FRACTIONS,
      full: '100%',
      ...negative(PERCENTAGES),
      ...negative(PERCENTAGES_FRACTIONS),
      '-full': '-100%',
    }),
    containers: (theme) => {
      let base = theme('base')
      if (typeof base == "object") base = base.default

      return {
        ...generateRange(1, 100, { denominators: [2, 4], inclusive: true, generateString(multiple) { return `${multiple * parseFloat(base)}px` } }),
        ...theme('screens'),
      }
    }
	},
  variants: {
    textIndent: ['responsive'],
  },
})

module.exports.generateRange = generateRange
