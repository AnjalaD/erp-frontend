import React from 'react';
import { Grid, TextField, Button, Card } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';


function MultiTextInput(props) {
    return (
        <Grid item xs={12}>
            <Card
                style={{
                    padding: 10,
                    borderStyle: 'groove',
                    borderColor: '#000000',
                    borderWidth: 1
                }}
            >
                <Grid container direction='row' alignItems='center'>
                    {props.label} <Button onClick={props.add}><Add /></Button>
                </Grid>
                {props.value.map((value, key) => (
                    <Grid container alignItems='center' key={key}>
                        <Grid item xs={10}>
                            <TextField
                                variant="outlined"
                                label={props.label}
                                onChange={(e) => props.onChange(e, key)}
                                value={value}
                                margin="normal"
                                fullWidth={true}
                                required={props.required || true}
                                inputProps={{
                                    type: props.type || 'text'
                                }}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => props.remove(key)}>
                                <Remove />
                            </Button>
                        </Grid >
                    </Grid>
                ))}
            </Card>
        </Grid>
    )
}

export default MultiTextInput;
