import React from 'react';
import { } from '@material-ui/core';
import { COLOURS } from '../../constants/constants';
import ColourPicker from './ColourPicker';

const ColourChanger = () => {
    return (
        <div>
            <ColourPicker category='Primary' range={COLOURS.primary}/>
            <ColourPicker category='Secondary' range={COLOURS.secondary}/>
        </div>
    )
}

export default ColourChanger
