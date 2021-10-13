import { DEFAULT_BASE } from '../constants'

export default function({ addBase, theme }:any) {
  const base = theme('base')
  if (typeof base == 'object') {
    const screens = theme('screens', {})

    const media_queries = Object.entries(screens).map(([breakpoint_name, width]) => { // Map each entry in `theme.screens` to a media query rule
      let breakpoint_base = base[breakpoint_name] // Look in the `theme.base` object for a base value with this breakpoint name as key
      if (breakpoint_base) return { // If a base exists for this breakpoint, spit out the min-width media query
        [`@media (min-width: ${width})`]: {
          ':root': {
            '--twgl-base': breakpoint_base
          },
        },
      }
  
      return {} // Otherwise return an empty object
    })

    addBase([
      {
        ':root': {
          '--twgl-base': base.default || DEFAULT_BASE,
          '--twgl-current-base': 'var(--twgl-base)'
        },
      },
      ...media_queries
    ])
  } else {
    addBase([{
      ':root': {
        '--twgl-base': base,
        '--twgl-current-base': 'var(--twgl-base)'
      }
    }])
  }
}
