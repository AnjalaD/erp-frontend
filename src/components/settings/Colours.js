import React,{useState} from 'react'

export const Colours = [{
    name: 'Marshmellow',
    code: '#795f86',
    shades: {
        darker: '#43354a',
        dark: '#5e4a68',
        light: '#9279a0',
        lighter: '#aa97b5'
    }
},
{
    name: 'Chrome',
    code: '#d9aa0d',
    shades: {
        darker: '#785e07',
        dark: '#a8840a',
        light: '#f2c326',
        lighter: '#f5d057'
    }
},
{
    name: 'Peach',
    code: '#159d4c',
    shades: {
        darker: '#094321',
        dark: '#0f7036',
        light: '#1bca62',
        lighter: '#35e47b'
    }
},
{
    name: 'Brick',
    code: '#d6250f',
    shades: {
        darker: '#771409',
        dark: '#a61d0c',
        light: '#f03e29',
        lighter: '#f36959'
    }
},
{
    name: 'Navy',
    code: '#3F51B5',
    shades: {
        darker: '#1A237E',
        dark: '#303F9F',
        light: '#7986CB',
        lighter: '#C5CAE9'
    }
}
]

export const PrimaryTheme = {
    name: 'Brick',
    code: '#d6250f',
    shades: {
        darker: '#771409',
        dark: '#a61d0c',
        light: '#f03e29',
        lighter: '#f36959'
    }
}

//const [primaryColour, setprimaryColour] = useState(PrimaryTheme)

//const changePrimaryColour = (theme) => setprimaryColour(theme)
