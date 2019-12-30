import React from 'react'
import { Button } from '@material-ui/core'

const ColourButton = ({colour}) => {
    return (
        <Button style={{ backgroundColor: colour.colourCode, margin: 10, padding: 5 }} >{colour.colourName}</Button>
    )
}

export default ColourButton
