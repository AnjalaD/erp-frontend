import React from 'react'
import { Button } from '@material-ui/core'

const ColourButton = ({colour,onClick}) => {
    return (
        <Button style={{ backgroundColor: colour.code, margin: 10, padding: 5 }} onClick = {onClick} >{colour.name}</Button>
    )
}

export default ColourButton
