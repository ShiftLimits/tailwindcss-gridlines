# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet.

## [0.2.4] - 2022-02-11

### Added
- Added new range generator function to automatically generate a range of fraction utilities, accessible with `gridlines.generateRange` (see tests)
- Extended spacing scale to 60 and added half and quarter fractions for the whole scale

## [0.2.3] - 2022-01-09

### Added
- Add `unit` utility for adjusting the base grid cell size on a per-element basis

### Changed
- Increase `line-height` scale values to 5 units (from 2)
- Add Stroke Width
- Add outline and outline offset
- Fixed bottom positioning on gridlines utilities
- Gridlines utilities will no longer generate if `theme.gridlines` is `false`

## [0.2.2] - 2021-10-10
### Added
- Add `fit-content` utility for `width`, `min-width`, and `max-width`; and for `height`, `min-height`, and `max-height`
- Add `min-content` utility for `width`, `max-width`, `height`, `min-height`, and `max-height`
- Add `max-content` utility for `width`, `max-width`, `height`, `min-height`, and `max-height`


## [0.2.1] - 2021-09-24
### Added
- Add `CHANGELOG.md` following the Keep a Changelog format.

### Changed
- Capitalized `default` key to make sure default `borderWidth` utility is set appropriately (removes `border-default`)

## [0.2.0] - 2021-07-23
### Added
- New config variable in the theme object, `theme.base`, which controls the scale of your grid cells.
- New spacing system preset that is expressed as a fraction of the `theme.base` grid cell size.
- New `gridlines-` utilities that overlay a grid to help visualize the new spacing system.