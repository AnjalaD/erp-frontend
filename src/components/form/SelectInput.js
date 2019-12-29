import React from 'react';
import { Grid, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';

function SelectInput(props) {
    return (
        <Grid item xs={props.xs || 6} style={{ marginTop: 16 }}>
            <FormControl variant='outlined' fullWidth={true}>
                <InputLabel>
                    {props.label}
                </InputLabel>
                <Select
                    disabled={props.disabled || false}
                    onChange={props.onChange}
                    value={props.value}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        props.selection.map((value, key) => (
                            <MenuItem key={key} value={value}>{value}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectInput;
