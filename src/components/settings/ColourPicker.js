import React from 'react';
import Radio from '@material-ui/core/Radio';
import { Button, Typography, Card, Grid, FormControlLabel, Container } from '@material-ui/core';
import { Colours } from './Colours';
import { useDispatch, useSelector } from 'react-redux';
import { set_color } from '../../redux/actions';

const ColourRadio = (props) => <Radio style={{ color: props.pallete.dark }} {...props} />

export default function ColourPicker(props) {
    const PrimaryTheme = useSelector(state => state.colors);
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = React.useState(0);

    const handleChange = event => {
        console.log(event.target.value)
        setSelectedValue(parseInt(event.target.value));
    };

    const Buttons = Colours.map((colour, key) => (
        < Grid item xs={2} key={key} >
            <FormControlLabel
                control={
                    < ColourRadio
                        checked={selectedValue === key}
                        onChange={handleChange}
                        value={key}
                        inputProps={{ 'aria-label': colour.name }}
                        pallete={colour.shades}
                    />
                }
                label={colour.name}
                labelPlacement="bottom"
            />
        </Grid >
    ))

    const submit = () => {
        dispatch(set_color(selectedValue))
    };

    return (
        <Container maxWidth="md">
            <Card
                elevation={4}
                style={{ padding: 10, margin: 10, width: '100%' }}
            >
                <Grid container spacing={1} justify='center'>
                    <Typography align='center' varient='h3' style={{ padding: 10 }} ><b>Select the Preferred Colour Theme</b></Typography>
                    <Grid container direction='row' justify='center' alignItems='center'>
                        {Buttons}
                    </Grid>
                    <br />
                    <Button
                        onClick={submit}
                        style={{
                            margin: 10,
                            padding: 10,
                            backgroundColor: PrimaryTheme.shades.light,
                            color: "#000000"
                        }}
                        variant="contained"
                    >
                        <b>Confirm</b>
                    </Button>
                </Grid>
            </Card>
        </Container>
    );
}
