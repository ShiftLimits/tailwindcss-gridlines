import { DEFAULT_RULE_COLOR, DEFAULT_RULE_SECONDARY_COLOR, SVG_CELL_SIZE } from '../constants'

function stripSVGWhitespace(svg:string) {
  return svg.replace(/[\t\s\n]*(<.*>)[\t\s\n]*/g, '$1')
}

const DOT_SVG = (theme) => stripSVGWhitespace(`
  <svg viewbox='-0.5 -0.5 ${SVG_CELL_SIZE - 0.5} ${SVG_CELL_SIZE - 0.5}' xmlns='http://www.w3.org/2000/svg'>
    <rect shape-rendering='crispEdges' x='0' y='0' width='1' height='1' fill='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
  </svg>
`)
const UNIT_SVG = (theme) => stripSVGWhitespace(`
  <svg viewbox='-0.5 -0.5 ${SVG_CELL_SIZE - 0.5} ${SVG_CELL_SIZE - 0.5}' xmlns='http://www.w3.org/2000/svg'>
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='-0.5' y2='-0.5' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='100%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='-0.5' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='100%' x2='100%' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
  </svg>
`)
const THIRDS_SVG = (theme) => stripSVGWhitespace(`
  <svg viewbox='-0.5 -0.5 ${SVG_CELL_SIZE - 0.5} ${SVG_CELL_SIZE - 0.5}' xmlns='http://www.w3.org/2000/svg'>
    <!-- Horizontal Lines -->
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='-0.5' y2='-0.5' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='100%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='33%' y2='33%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='66%' y2='66%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />

    <!-- Vertical Lines -->
    <line shape-rendering='crispEdges' x1='-0.5' x2='-0.5' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='100%' x2='100%' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='33%' x2='33%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
    <line shape-rendering='crispEdges' x1='66%' x2='66%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
  </svg>
`)
const QUADS_SVG = (theme) => stripSVGWhitespace(`
  <svg viewbox='-0.5 -0.5 ${SVG_CELL_SIZE - 0.5} ${SVG_CELL_SIZE - 0.5}' xmlns='http://www.w3.org/2000/svg'>
    <!-- Horizontal Lines -->
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='-0.5' y2='-0.5' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='100%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='25%' y2='25%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='50%' y2='50%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='75%' y2='75%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />

    <!-- Vertical Lines -->
    <line shape-rendering='crispEdges' x1='-0.5' x2='-0.5' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='100%' x2='100%' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='25%' x2='25%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
    <line shape-rendering='crispEdges' x1='50%' x2='50%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
    <line shape-rendering='crispEdges' x1='75%' x2='75%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='4.125%' />
  </svg>
`)
const FIFTHS_SVG = (theme) => stripSVGWhitespace(`
  <svg viewbox='-0.5 -0.5 ${SVG_CELL_SIZE - 0.5} ${SVG_CELL_SIZE - 0.5}' xmlns='http://www.w3.org/2000/svg'>
    <!-- Horizontal Lines -->
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='-0.5' y2='-0.5' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='100%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='20%' y2='20%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='40%' y2='40%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='60%' y2='60%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='80%' y2='80%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />

    <!-- Vertical Lines -->
    <line shape-rendering='crispEdges' x1='-0.5' x2='-0.5' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='100%' x2='100%' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='20%' x2='20%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
    <line shape-rendering='crispEdges' x1='40%' x2='40%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
    <line shape-rendering='crispEdges' x1='60%' x2='60%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
    <line shape-rendering='crispEdges' x1='80%' x2='80%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='5%' />
  </svg>
`)
const OCTS_SVG = (theme) => stripSVGWhitespace(`
  <svg viewbox='-0.5 -0.5 ${SVG_CELL_SIZE - 0.5} ${SVG_CELL_SIZE - 0.5}' xmlns='http://www.w3.org/2000/svg'>
    <!-- Horizontal Lines -->
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='-0.5' y2='-0.5' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='0%' x2='100%' y1='100%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='12.5%' y2='12.5%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='25%' y2='25%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='37.5%' y2='37.5%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='50%' y2='50%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='62.5%' y2='62.5%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='75%' y2='75%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='-0.5' x2='100%' y1='87.5%' y2='87.5%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>

    <!-- Vertical Lines -->
    <line shape-rendering='crispEdges' x1='-0.5' x2='-0.5' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='100%' x2='100%' y1='0%' y2='100%' stroke-width='2' stroke='${theme('gridlines.ruleColor', DEFAULT_RULE_COLOR)}'/>
    <line shape-rendering='crispEdges' x1='12.5%' x2='12.5%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='25%' x2='25%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='37.5%' x2='37.5%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='50%' x2='50%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='62.5%' x2='62.5%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='75%' x2='75%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
    <line shape-rendering='crispEdges' x1='87.5%' x2='87.5%' y1='-0.5' y2='100%' stroke-width='1' stroke='${theme('gridlines.ruleSecondaryColor', DEFAULT_RULE_SECONDARY_COLOR)}' stroke-dasharray='3.125%'/>
  </svg>
`)

export default function({ addUtilities, theme }:any) {
  if (!theme('gridlines')) return

  addUtilities(
    {
      '[class*="gridlines-"]::after': {
        'z-index': 1000000,
        content: `''`,
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        'background-size': 'var(--twgl-current-base) var(--twgl-current-base)',
        'pointer-events': 'none',
        'mix-blend-mode': 'difference'
      },
      '.gridlines-top-left::after': {
        'background-position': 'top left'
      },
      '.gridlines-left::after': {
        'background-position': 'left'
      },
      '.gridlines-bottom-left::after': {
        'background-position': 'bottom left'
      },
      '.gridlines-top-right::after': {
        'background-position': 'top right'
      },
      '.gridlines-right::after': {
        'background-position': 'right'
      },
      '.gridlines-bottom-right::after': {
        'background-position': 'bottom right'
      },
      '.gridlines-center::after': {
        'background-position': 'center'
      },
      '.gridlines-thirds::after': {
        'background-image': `url("data:image/svg+xml;utf8,${ THIRDS_SVG(theme) }")`
      },
      '.gridlines-quads::after': {
        'background-image': `url("data:image/svg+xml;utf8,${ QUADS_SVG(theme) }")`
      },
      '.gridlines-fifths::after': {
        'background-image': `url("data:image/svg+xml;utf8,${ FIFTHS_SVG(theme) }")`
      },
      '.gridlines-octs::after': {
        'background-image': `url("data:image/svg+xml;utf8,${ OCTS_SVG(theme) }")`
      },
      '.gridlines-dots::after': {
        'background-image': `url("data:image/svg+xml;utf8,${ DOT_SVG(theme) }")`
      },
      '.gridlines-unit::after': {
        'background-image': `url("data:image/svg+xml;utf8,${ UNIT_SVG(theme) }")`
      },
    }
  )
}
