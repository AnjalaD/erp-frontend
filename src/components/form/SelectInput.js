import React from 'react';
import { Grid, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';

function SelectInput(props) {
    const inputLabel = React.useRef(null);

    return (
        <Grid item xs={props.xs || 6} style={{ marginTop: 8 }}>
            <FormControl variant='outlined' fullWidth={true}>
                <InputLabel ref={inputLabel}>{props.label}</InputLabel>
                <Select
                    onChange={props.onChange}
                    value={props.value}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        props.selection.map(({ value, label }, key) => (
                            <MenuItem key={key} value={value}>{label}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectInput;
