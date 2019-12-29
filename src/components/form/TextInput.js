import React from 'react';
import { Grid, TextField } from '@material-ui/core';

function TextInput(props) {
    return (
        <Grid item xs={props.xs || 6}>
            <TextField
                variant="outlined"
                label={props.label}
                onChange={props.onChange}
                value={props.value}
                margin="normal"
                fullWidth={true}
                disabled={props.disabled || false}
                required={props.required || true}
                inputProps={{
                    type: props.type || 'text'
                }}
                {...props}
            />
        </Grid>
    )
}

export default TextInput;
