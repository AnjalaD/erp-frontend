import { Typography, Grid, Button, Select, MenuItem, Card, InputLabel } from '@material-ui/core';
import React, {useState} from 'react';
import { COLOURS } from '../../../constants/constants'
import { minWidth } from '@material-ui/system';


const LeaveCheck = (props) => {

    const [selected, setSelected] = useState('Annual');

    const handleChange = event => {
        setSelected(event.target.value);
    };

    return (
        <Card 
            elevation={1}
            style={{ padding: 10, marginTop:30, width: '100%' }}
        >
            <Select varient="outlined" displayEmpty style={{ margin: 10, padding: 10, minWidth:200}}>
                <InputLabel><i>Leave Type</i></InputLabel>
                <MenuItem value={'Annual'} onClick={handleChange} >Annual</MenuItem>
                <MenuItem value={'Casual'} onClick={handleChange} >Casual</MenuItem>
                <MenuItem value={'Sick'} onClick={handleChange} >Sick</MenuItem>
                <MenuItem value={'No Pay'} onClick={handleChange} >No pay</MenuItem>

            </Select>
            <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                variant="contained"
            >Check</Button>
            <InputLabel> check to see remaining leaves </InputLabel>
        </Card>
    )
}

export default LeaveCheck;