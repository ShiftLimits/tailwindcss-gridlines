export function generateUnitMultipleString(multiple:number) {
	return `calc(${multiple} * var(--twgl-current-base))`
}

type GenerateStringFn = typeof generateUnitMultipleString

import numericQuantity from 'numeric-quantity'
export function generateFractionUtil(fraction:string, generateString:GenerateStringFn = generateUnitMultipleString) {
	let decimal = numericQuantity(fraction)
	return { [fraction.replace(' ', '-')]: generateString(decimal) }
}

export function generateUnitConfig(fractions:string[]) {
	let config = {}
	for (let fraction of fractions) {
		let decimal = numericQuantity(fraction)
		Object.assign(config, { [fraction.replace(' ', '-')]: decimal })
	}

	return config
}

interface RangeOptions {
	denominators:number[]
	inclusive?:boolean
	generateString?:GenerateStringFn
}
export function generateRange(from:number, to:number, { denominators, inclusive, generateString }:RangeOptions = { denominators: [2, 4], inclusive: true }) {
	let range = {}

	for (let i = from; i <= to; i++) {
		if (i > 0 && (i != from || inclusive)) Object.assign(range, generateFractionUtil(`${i}`, generateString))
		if (i != to) {
		for (let denominator of denominators) {
				for (let numerator = 1; numerator < denominator; numerator++) {
					Object.assign(range, generateFractionUtil(`${i > 0 ? i+' ' : ''}${numerator}/${denominator}`, generateString))
				}
			}
		}
	}

	return range
}
