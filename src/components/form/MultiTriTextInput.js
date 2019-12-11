import React from 'react';
import { Grid, Card, IconButton, Typography } from '@material-ui/core';
import SelectInput from './SelectInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import TextInput from './TextInput';


function MultiTriTextInput(props) {
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
                    <Typography variant='body1'>New Leave Limit</Typography>
                    <IconButton onClick={props.add}>
                        <AddCircleOutline color='primary' />
                    </IconButton>
                </Grid>
                {props.value.map((value, key) => (
                    <Grid container direction='row' alignItems='center' justify='center' key={key} spacing={1}>
                        <SelectInput xs={4}
                            label='Pay Grade'
                            onChange={(e) => props.onChange(e, key, 'pay_grade')}
                            selection={props.selection1}
                            value={value.pay_grade}
                        />
                        <SelectInput xs={4}
                            label="Leave Type"
                            onChange={(e) => props.onChange(e, key, 'leave_type')}
                            selection={props.selection2}
                            value={value.leave_type}
                        />
                        <TextInput xs={2}
                            label="Limit"
                            onChange={(e) => props.onChange(e, key, 'limit')}
                            value={value.limit}
                            type={props.type}
                        />
                        <Grid item xs={1}>
                            <IconButton onClick={() => props.remove(key)}>
                                <RemoveCircleOutline color='error' />
                            </IconButton>
                        </Grid >
                    </Grid>
                ))}
            </Card>
        </Grid>
    )
}

export default MultiTriTextInput;
