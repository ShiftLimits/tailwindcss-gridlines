export function generateUnitMultipleString(multiple:number) {
  return `calc(${multiple} * var(--twgl-base))`
}

import numericQuantity from 'numeric-quantity'
export function generateFractionUtil(fraction:string) {
  let decimal = numericQuantity(fraction)
  return { [fraction.replace(' ', '-')]: generateUnitMultipleString(decimal) }
}