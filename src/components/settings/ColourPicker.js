import React, {useState} from 'react';
import ColourButton from './ColourButton';
import ColourViewer from './ColourViewer';
import { Colours} from './Colours';
import { Button } from '@material-ui/core';

function ColourPicker(props) {

    const changeSelectedColour = (colour) => () => {
        setSelectedColour(colour)
    }

    const colourList = Colours.map(colour => (
        <ColourButton colour={colour} key={colour.name} onClick={changeSelectedColour(colour.code)}/>
    ))

    const [selectedColour, setSelectedColour] = useState('#758392')


    return (
        <div>
            <h5>Select the {props.category} Colour</h5>
            {colourList}
            <ColourViewer colour={selectedColour} />
            <Button>Confirm</Button>

        </div>
    )
    
}

export default ColourPicker
