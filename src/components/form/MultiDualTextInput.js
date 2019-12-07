import React from 'react';
import { Grid, TextField, Button, Card, IconButton, Typography } from '@material-ui/core';
import { Add, RemoveCircleOutline, Save } from '@material-ui/icons';



function MultiDualTextInput(props) {
    console.log('build');
    const { values, save, remove, onChange, add } = props;
    return (
        <Grid container justify='center'
            style={{ pointerEvents: 'all', paddingLeft: 20, paddingRight: 20 }}
        >
            <Card
                style={{

                    padding: 10,
                    borderStyle: 'groove',
                    borderColor: '#000000',
                    borderWidth: 1
                }}
            >
                <Grid item xs={12}>
                    <Grid container direction='row' alignItems='center'>
                        Add New Fields <Button onClick={add}><Add /></Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {values.map((value, key) => (
                        <Grid container alignItems='center' key={key} spacing={1}>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    label="Field Name"
                                    onChange={onChange(key, 'key')}
                                    value={value.key}
                                    margin="normal"
                                    fullWidth={true}
                                    required={true}
                                    autoFocus
                                    inputProps={{
                                        type: 'text'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    label="Value"
                                    onChange={onChange(key, 'value')}
                                    value={value.value}
                                    margin="normal"
                                    fullWidth={true}
                                    required={true}
                                    inputProps={{
                                        type: 'text'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton size='small' onClick={save(key)}>
                                    <Save />
                                </IconButton>
                                <IconButton size='small' onClick={remove(key)}>
                                    <RemoveCircleOutline />
                                </IconButton>
                            </Grid >
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Typography color='error'>{props.error ? '*' + props.error : null}</Typography>
                </Grid>
            </Card>
        </Grid>
    )
}

export default MultiDualTextInput;
