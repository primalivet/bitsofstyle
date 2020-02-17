# README

Bits of Style is functional CSS generator. 

Give it a JSON config and get back a file of CSS classes in a functional maner,
heavily inspired by the awesome Tachyons.

## Default config
The config below is the default config with all options included and is used as 
a base. You can and probably want to provide your own config with custom colors, 
spacing, fonts etc.

You are free to provide a partial config. If you, for example only want to
change the colors you just specify the `variables.colors` key in the your JSON
config and your colors will be used instead of the default ones. The styles you
don't specify will fallback to the styles specified in the default config.

## Create components of generated classes

``` json
Include default config
```


## Modules
- ~~background-color~~
- background-gradient
- background-position
- background-size
- ~~border-color~~
- ~~border-radius~~
- ~~border-style~~
- ~~border-width~~
- ~~border~~
- ~~box-shadow~~
- box-sizing
- code
- ~~color~~
- display
- ~~flexbox~~
- float
- ~~font-family~~
- ~~font-size~~
- ~~font-weight~~
- grid
- ~~height~~
- image
- letter-spacing
- line-height
- list
- ~~max-width~~
- ~~margin~~
- ~~padding~~
- ~~opacity~~
- outline
- overflow
- ~~position~~
- tables
- text-align
- text-decoration
- text-transform
- vertical-align
- visibility
- white-space
- ~~width~~
- word-break
- z-index
- transform
- transition

TODO: prefers-color-scheme integration with generated css
TODO: some kind of "autogrid" system. Config for steps of cell width and count then use auto rows. Should also have a configureable gap.
TODO: skip setting in config, should be array of strings, if a valid config key is "skip array" it should be skipped, simple.
TODO: active, visited, focus, hover, clear, form resets, aspect-ratio
TODO: fluid type like below
      "fluid": [
        [ ["min size", "resolution"], ["max size", "resolution"] ]
        [ ["16", "320"], ["24", "1200"] ]
      ]
