// import React, {useState} from 'react';
// import ColourButton from './ColourButton';
// import ColourViewer from './ColourViewer';
// import { Colours} from './Colours';
// import { Button } from '@material-ui/core';

//function ColourPicker(props) {

//     const changeSelectedColour = (colour) => () => {
//         setSelectedColour(colour)
//     }

//     const colourList = Colours.map(colour => (
//         <ColourButton colour={colour} key={colour.name} onClick={changeSelectedColour(colour.code)}/>
//     ))

//     const [selectedColour, setSelectedColour] = useState('#758392')


//     return (
//         <div>
//             <h5>Select the {props.category} Colour</h5>
//             {colourList}
//             <ColourViewer colour={selectedColour} />
//             <Button>Confirm</Button>

//         </div>
//     )

// }
import React from 'react';
import Radio from '@material-ui/core/Radio';
import { Button, Typography,Card,Grid, FormControlLabel } from '@material-ui/core';
import { Colours, PrimaryTheme } from './Colours';

const ColourRadio = (props) => <Radio style={{ color: props.pallete.dark }} {...props} />

export default function ColourPicker(props) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    const Buttons = Colours.map((colour, key) => (
        <FormControlLabel
            value="bottom"
            control={< ColourRadio
                checked={selectedValue === colour.name}
                onChange={handleChange}
                value={colour.name}
                name="radio-button-demo"
                inputProps={{ 'aria-label': colour.name }}
                pallete={colour.shades}
                key={key}/>}
            label={colour.name}
            labelPlacement="bottom"
        />
        
    ))

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10, width: '80%' }}
        >
            <Grid container spacing={1} >
                <Grid container direction='row' alignItems='center'>
                    <Typography varient='h3'  style={{ padding: 10 }} ><b>Select the {props.category} Colour</b></Typography>
                </Grid>
            
            {/* <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />
                <ColourRadio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                    pallete = {PrimaryTheme.shades}
                />
                <Radio
                    checked={selectedValue === 'd'}
                    onChange={handleChange}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <Radio
                    checked={selectedValue === 'e'}
                    onChange={handleChange}
                    value="e"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                /> */}
            {Buttons}
            <br />
                <Button style={{ margin: 10, padding: 10, backgroundColor: PrimaryTheme.shades.light, color: "#000000" }}
                    variant="contained"><b>Confirm</b></Button>
        </Grid>
    </Card>
    );
}

// export default ColourPicker
