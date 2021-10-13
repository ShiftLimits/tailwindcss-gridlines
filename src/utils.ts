export function generateUnitMultipleString(multiple:number) {
  return `calc(${multiple} * var(--twgl-current-base))`
}

import numericQuantity from 'numeric-quantity'
export function generateFractionUtil(fraction:string) {
  let decimal = numericQuantity(fraction)
  return { [fraction.replace(' ', '-')]: generateUnitMultipleString(decimal) }
}

export function generateUnitConfig(fractions:string[]) {
  let config = {}
  for (let fraction of fractions) {
    let decimal = numericQuantity(fraction)
    Object.assign(config, { [fraction.replace(' ', '-')]: decimal })
  }

  return config
}