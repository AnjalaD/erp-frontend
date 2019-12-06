import React from 'react';
import { Grid, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';

function SelectInput(props) {
    return (
        <Grid item xs={props.xs || 6}>
            <FormControl variant='outlined' fullWidth={true}>
                <InputLabel ref={React.useRef(null)}>{props.label}</InputLabel>
                <Select
                    onChange={props.onChange}
                    value={props.value}
                >
                    {props.selection.map(({ value, label }, key) => (
                        <MenuItem key={key} value={value}>{label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectInput;
