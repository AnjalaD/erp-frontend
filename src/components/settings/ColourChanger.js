import React from 'react';
import { } from '@material-ui/core';
import ColourPicker from './ColourPicker';

const ColourChanger = () => {
    return (
        <div>
            <ColourPicker category='Primary' />
            {/* <ColourPicker category='Secondary' range={COLOURS.secondary}/> */}
        </div>
    )
}

export default ColourChanger
