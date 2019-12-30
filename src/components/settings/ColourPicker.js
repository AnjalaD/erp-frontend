import React, {useState} from 'react';
import {SliderPicker } from 'react-color';
import { COLOURS } from '../../constants/constants';
import { Button } from '@material-ui/core';
import ColourButton from './ColourButton';
import ColourViewer from './ColourViewer';

function ColourPicker(props) {

    // const [black, setBlack] = useState(props.range.medium);

    // const changeBlack = (colour) => {
    //     setBlack(colour.hex)
    //     console.log(colour)
    // }

    // const [Colour, setColour] = useState(COLOURS.primary.medium);

    // const changeColour = col => {
    //     setColour(col)
    // }
    // const changetoselectedColour = () => {
    //     changeColour(black)
    // }

    // return (
    //     <div style={{width:'70%'}}>

    //         <h5>Select the {props.category} Colour</h5>
    //         <SliderPicker color={black} onChangeComplete={changeBlack}/>
    //         <Button style={{ backgroundColor: Colour, margin:10 }} onClick={changetoselectedColour}>123</Button>
    //     </div>
    //     )

    const colours = [
        {
            colour: 'ff0000',
            colourName: 'Red'
        },
        {
            colour: '00ff00',
            colourName: 'Green'
        },
        {
            colour: '0000ff',
            colourName: 'Blue'
        }
    ]

    const colourList = colours.map(colour => (
        <ColourButton colour={colour} />
    ))

    const [selectedColour, setSelectedColour] = useState('#237614')

    const changeSelectedColour = (colour) => {
        console.log("wer")
        setSelectedColour('#767579')
    }

    return (
        <div>
            <h5>Select the {props.category} Colour</h5>
            {colourList}
            <ColourViewer colour={selectedColour}/>

        </div>
    )
    
}

export default ColourPicker
