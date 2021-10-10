# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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