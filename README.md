# Gridlines for Tailwind CSS

An experimental default experience for Tailwind CSS that uses gridlines and fractions for spatial reasoning.

**Note:** This is under active development and may be subject to breaking changes until it reaches a stable version 1.0.0. Not recommended for production yet but please play around if this idea resonates with you.

## What is this?

Gridlines for Tailwind CSS is a reimagining of Tailwind's spacing system inspired by grid paper. It is a drop-in plugin that adds a preset which moves all spacing-related utilities over to to the [new system](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki/Spacing). It also includes the [unit utility](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki/Unit) to scale the spacing values per-element and some [overlay utilities](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki/Gridlines) to help visualize the new spacing values.

The core idea is to switch from reasoning about layout in absolute pixels to reasoning in ratios and fractions relative to your base grid cell size. This allows for creating responsive designs that can be scaled by changing one value - `theme.base` - which is useful for adapting to device contexts where the user can be very close to the screen, such as tablets and mobile phones, or very far from the screen, such as so-called '10-foot' UI for TV and advertising panels.

## Installation

Install with your favorite NodeJS package manager:

```bash
$ npm install tailwindcss-gridlines

$ yarn add tailwindcss-gridlines
```

Add to your Tailwind CSS config file:

```js
// tailwind.config.js

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-gridlines')
  ],
}
```

## Documentation

Please see the [documentation Wiki](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki) for a full description of what is new and what has changed.

## New Utilities

### Base Grid Cell Size

The core unit of gridlines is your base grid cell size. You can think of this as the equivalent of the 1cm in centimetre graph paper. Changing this value scales your layout proportionally.

| Name | Size |
| ---- | ---- |
| base | 24px |

#### Controlling Per-Element
- *See [unit documentation](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki/Unit)*

The new `unit` utility can be used to adjust the relative sizing for an individual element and its children.

#### Customizing

You can customize the base unit by editing the `theme.base` value of your Tailwind config:

```js
// tailwind.config.js

module.exports = {
  theme: {
    base: '28px' // Changes the base grid cell size to 28px
  },
  // ...
}
```

You can make the base unit responsive using the breakpoint names defined in the `theme.screens` object as keys:

```js
// tailwind.config.js

module.exports = {
  theme: {
    base: {
      default: '20px', // Use a smaller grid cell size by default for smaller screens
      lg: '24px' // At the `lg` breakpoint, scale the grid size to 24px as these devices are probably held further away from the user
    }
  },
  // ...
}
```

### Gridlines
- *See [gridlines documentation](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki/Gridlines)*

Overlay a grid to help visually aid the design process.

## Spacing Scale
- *See [spacing documentation](https://github.com/ShiftLimits/tailwindcss-gridlines/wiki/Spacing)*

Gridlines is a complete overhaul of the spacing scale in Tailwind CSS.

With vanilla Tailwind, the spacing scale uses decimals and is equivalent to a grid with a base unit size of `4px`. With Gridlines, the spacing scale uses fractions and you define the base unit size that the spacing scale is a fraction of. By default, Gridlines uses a base unit size of `24px`.

Example of the fraction scale from 0 to 1 with a base unit of `24px`:

| Name   | Size  | Pixels   |
| ------ | ----- | -------- |
| 0      | 0     | 0px      |
| px     | 1px   | 1px      |
| 1/8    | 0.125 | 3px      |
| 2/8    | 0.25  | 6px      |
| 3/8    | 0.375 | 9px      |
| 4/8    | 0.5   | 12px     |
| 5/8    | 0.625 | 15px     |
| 6/8    | 0.75  | 18px     |
| 7/8    | 0.875 | 21px     |
| 1/6    | 0.166 | 4px      |
| 2/6    | 0.333 | 7.992px  |
| 3/6    | 0.5   | 12px     |
| 4/6    | 0.666 | 16.008px |
| 5/6    | 0.833 | 20px     |
| 1/5    | 0.2   | 4.8px    |
| 2/5    | 0.4   | 9.6px    |
| 3/5    | 0.6   | 14.4px   |
| 4/5    | 0.8   | 19.12px  |
| 1/4    | 0.25  | 6px      |
| 2/4    | 0.5   | 12px     |
| 3/4    | 0.75  | 18px     |
| 1/3    | 0.333 | 7.992px  |
| 2/3    | 0.666 | 16.008px |
| 1/2    | 0.5   | 12px     |
| 1      | 1     | 24px     |

## Contributing

Feedback is welcome, please use GitHub issues appropriately. This idea has been rattling around in my head since 2018 so fresh perspectives may lead to greater insight.

If suggesting any major changes please make sure it is well reasoned and in line with the core principles of this project. Understand I am one busy person and require a description of the problem and a compelling argument for the proposed solution in order to consider it properly.

## License

Gridlines for Tailwind CSS is [MIT](LICENSE) licensed.