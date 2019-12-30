import React, { Fragment } from 'react';
import { Grid, TextField, Card, IconButton, Typography } from '@material-ui/core';
import { RemoveCircleOutline, AddCircleOutline, DeleteOutlined, EditOutlined, SaveOutlined } from '@material-ui/icons';


function EditMultiTextInput(props) {
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
                    <Typography variant='body1'>{props.label}</Typography>
                    <IconButton onClick={props.add}>
                        <AddCircleOutline color='primary' />
                    </IconButton>
                </Grid>
                {props.value.map(({ value, isNew, isEdit }, key) => (
                    <Grid container alignItems='center' key={key}>
                        <Grid item xs={10}>
                            <TextField
                                disabled={!isEdit}
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
                        {
                            isNew ?
                                <Grid item xs={2}>
                                    <IconButton onClick={() => props.save(key)}>
                                        <SaveOutlined color='primary' />
                                    </IconButton>
                                    <IconButton onClick={() => props.remove(key)}>
                                        <RemoveCircleOutline color='error' />
                                    </IconButton>
                                </Grid >
                                :
                                isEdit ?
                                    <Fragment>
                                        <Grid item xs={2}>
                                            <IconButton onClick={() => props.save(key)}>
                                                <SaveOutlined color='primary' />
                                            </IconButton>
                                            <IconButton onClick={() => props.delete(key)}>
                                                <DeleteOutlined color='error' />
                                            </IconButton>
                                        </Grid >
                                    </Fragment>
                                    :
                                    <Grid item xs={1}>
                                        <IconButton onClick={() => props.edit(key)}>
                                            <EditOutlined color='primary' />
                                        </IconButton>
                                    </Grid >
                        }
                    </Grid>
                ))}
            </Card>
        </Grid>
    )
}

export default EditMultiTextInput;
