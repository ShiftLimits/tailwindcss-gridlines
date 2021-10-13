export default function({ matchUtilities, theme }:any) {
  matchUtilities(
		{
			'unit': (value) => ({ '--twgl-current-base': `calc(${value} * var(--twgl-base))` })
		},
		{
			values: theme('unit'),
		}
	)
}
