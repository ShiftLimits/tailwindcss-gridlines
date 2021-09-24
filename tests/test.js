const postcss = require("postcss")
const tailwindcss = require("tailwindcss")
const gridlines = require('../dist/index')
const cssMatcher = require('jest-matcher-css')
const { generateDotsSVG, generateUnitSVG, generateThirdsSVG, generateQuadsSVG, generateFifthsSVG, generateOctsSVG } = require("./utils")

function generateUtilityCSS(config = {}) {
    config = Object.assign({ theme: {}, corePlugins: [] }, config)
    return postcss(
            tailwindcss({
                ...config,
                plugins: [gridlines]
            })
        ).process('@tailwind utilities;', {
            from: undefined,
        })
        .then(result => {
            return result.css;
        })
}

function generateBaseCSS(config = {}) {
    config = Object.assign({ theme: {}, corePlugins: [] }, config)
    return postcss(
            tailwindcss({
                ...config,
                plugins: [gridlines]
            })
        ).process('@tailwind base;', {
            from: undefined,
        })
        .then(result => {
            return result.css;
        })
}

expect.extend({
    toMatchCss: cssMatcher
})

describe('Preflight', () => {
    it('should add the default base grid cell size CSS variable to :root', () => {
        const output = `:root {
					--twgl-base: 24px;
				}`

        return generateBaseCSS().then(result => {
            expect(result).toMatchCss(output)
        })
    })
    it('should add a custom base grid cell size CSS variable to :root', () => {
        const output = `:root {
					--twgl-base: 28px;
				}`

        return generateBaseCSS({
            theme: {
                base: '28px'
            }
        }).then(result => {
            expect(result).toMatchCss(output)
        })
    })
    it('should add the default base grid cell size CSS variable to :root and create media queries for breakpoints', () => {
        const output = `:root {
					--twgl-base: 24px
				}
		
				@media (min-width: 640px) {
					:root {
						--twgl-base: 22px
					}
				}
		
				@media (min-width: 768px) {
					:root {
						--twgl-base: 24px
					}
				}`

        return generateBaseCSS({
            theme: {
                base: {
                    sm: '22px',
                    md: '24px'
                }
            }
        }).then(result => {
            expect(result).toMatchCss(output)
        })
    })
    it('should add a custom base grid cell size CSS variable to :root and create media queries for breakpoints', () => {
        const output = `:root {
					--twgl-base: 28px
				}
		
				@media (min-width: 640px) {
					:root {
						--twgl-base: 22px
					}
				}
		
				@media (min-width: 768px) {
					:root {
						--twgl-base: 24px
					}
				}`

        return generateBaseCSS({
            theme: {
                base: {
                    default: '28px',
                    sm: '22px',
                    md: '24px'
                }
            }
        }).then(result => {
            expect(result).toMatchCss(output)
        })
    })
})

describe('Gridlines utilities', () => {
    it('should generate utility classes with default colors', () => {
        const output = `
					[class*="gridlines-"]::after {
							z-index: 1000000;
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-size: var(--twgl-base) var(--twgl-base);
							pointer-events: none;
							mix-blend-mode: difference
					}
			
					.gridlines-top-left::after {
							background-position: top left
					}
			
					.gridlines-left::after {
							background-position: left
					}
			
					.gridlines-bottom-left::after {
							background-position: top left
					}
			
					.gridlines-top-right::after {
							background-position: top right
					}
			
					.gridlines-right::after {
							background-position: right
					}
			
					.gridlines-bottom-right::after {
							background-position: top right
					}
			
					.gridlines-center::after {
							background-position: center
					}
			
					.gridlines-thirds::after {
							background-image: url("data:image/svg+xml;utf8,${generateThirdsSVG()}")
					}
			
					.gridlines-quads::after {
							background-image: url("data:image/svg+xml;utf8,${generateQuadsSVG()}")
					}
			
					.gridlines-fifths::after {
							background-image: url("data:image/svg+xml;utf8,${generateFifthsSVG()}")
					}
			
					.gridlines-octs::after {
							background-image: url("data:image/svg+xml;utf8,${generateOctsSVG()}")
					}
			
					.gridlines-dots::after {
							background-image: url("data:image/svg+xml;utf8,${generateDotsSVG()}")
					}
			
					.gridlines-unit::after {
							background-image: url("data:image/svg+xml;utf8,${generateUnitSVG()}")
					}
			`

        return generateUtilityCSS().then(result => {
            expect(result).toMatchCss(output)
        })
    })

    it('should generate utility classes with custom primary rule color', () => {
        const custom_rule_color = 'rgba(255,0,0, 0.2)'
        const output = `
					[class*="gridlines-"]::after {
							z-index: 1000000;
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-size: var(--twgl-base) var(--twgl-base);
							pointer-events: none;
							mix-blend-mode: difference
					}
			
					.gridlines-top-left::after {
							background-position: top left
					}
			
					.gridlines-left::after {
							background-position: left
					}
			
					.gridlines-bottom-left::after {
							background-position: top left
					}
			
					.gridlines-top-right::after {
							background-position: top right
					}
			
					.gridlines-right::after {
							background-position: right
					}
			
					.gridlines-bottom-right::after {
							background-position: top right
					}
			
					.gridlines-center::after {
							background-position: center
					}
			
					.gridlines-thirds::after {
							background-image: url("data:image/svg+xml;utf8,${generateThirdsSVG({ruleColor:custom_rule_color})}")
					}
			
					.gridlines-quads::after {
							background-image: url("data:image/svg+xml;utf8,${generateQuadsSVG({ruleColor:custom_rule_color})}")
					}
			
					.gridlines-fifths::after {
							background-image: url("data:image/svg+xml;utf8,${generateFifthsSVG({ruleColor:custom_rule_color})}")
					}
			
					.gridlines-octs::after {
							background-image: url("data:image/svg+xml;utf8,${generateOctsSVG({ruleColor:custom_rule_color})}")
					}
			
					.gridlines-dots::after {
							background-image: url("data:image/svg+xml;utf8,${generateDotsSVG({ruleColor:custom_rule_color})}")
					}
			
					.gridlines-unit::after {
							background-image: url("data:image/svg+xml;utf8,${generateUnitSVG({ruleColor:custom_rule_color})}")
					}
			`

        return generateUtilityCSS({
            theme: {
                gridlines: {
                    ruleColor: custom_rule_color
                }
            }
        }).then(result => {
            expect(result).toMatchCss(output)
        })
    })

    it('should generate utility classes with custom secondary rule color', () => {
        const custom_rule_secondary_color = 'rgba(255,0,0, 0.1)'
        const output = `
				[class*="gridlines-"]::after {
						z-index: 1000000;
						content: '';
						display: block;
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-size: var(--twgl-base) var(--twgl-base);
						pointer-events: none;
						mix-blend-mode: difference
				}
		
				.gridlines-top-left::after {
						background-position: top left
				}
		
				.gridlines-left::after {
						background-position: left
				}
		
				.gridlines-bottom-left::after {
						background-position: top left
				}
		
				.gridlines-top-right::after {
						background-position: top right
				}
		
				.gridlines-right::after {
						background-position: right
				}
		
				.gridlines-bottom-right::after {
						background-position: top right
				}
		
				.gridlines-center::after {
						background-position: center
				}
		
				.gridlines-thirds::after {
						background-image: url("data:image/svg+xml;utf8,${generateThirdsSVG({ruleSecondaryColor:custom_rule_secondary_color})}")
				}
		
				.gridlines-quads::after {
						background-image: url("data:image/svg+xml;utf8,${generateQuadsSVG({ruleSecondaryColor:custom_rule_secondary_color})}")
				}
		
				.gridlines-fifths::after {
						background-image: url("data:image/svg+xml;utf8,${generateFifthsSVG({ruleSecondaryColor:custom_rule_secondary_color})}")
				}
		
				.gridlines-octs::after {
						background-image: url("data:image/svg+xml;utf8,${generateOctsSVG({ruleSecondaryColor:custom_rule_secondary_color})}")
				}
		
				.gridlines-dots::after {
						background-image: url("data:image/svg+xml;utf8,${generateDotsSVG({ruleSecondaryColor:custom_rule_secondary_color})}")
				}
		
				.gridlines-unit::after {
						background-image: url("data:image/svg+xml;utf8,${generateUnitSVG({ruleSecondaryColor:custom_rule_secondary_color})}")
				}
		`

        return generateUtilityCSS({
            theme: {
                gridlines: {
                    ruleSecondaryColor: custom_rule_secondary_color
                }
            }
        }).then(result => {
            expect(result).toMatchCss(output)
        })
    })
})

describe('Preset', () => {})