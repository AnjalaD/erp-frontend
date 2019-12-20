import React, {useState} from 'react';
import {SliderPicker } from 'react-color';
import { COLOURS } from '../../constants/constants';
import { Button } from '@material-ui/core';

function ColourPicker() {

    const [black, setBlack] = useState('#830245');

    const changeBlack = (colour) => {
        setBlack(colour.hex)
        console.log(colour)
    }

    const [Colour, setColour] = useState(COLOURS.primary.medium);

    const changeColour = col => {
        setColour(col)
    }
    const changetoselectedColour = () => {
        changeColour(black)
    }

    return (
        <div>
            <SliderPicker color={black} onChangeComplete={changeBlack}>qwertyu</SliderPicker>
            
            <Button style={{ backgroundColor: Colour }} onClick={changetoselectedColour}>123</Button>
        </div>
        )
    
}

export default ColourPicker
