import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Card, IconButton } from '@material-ui/core';
import TextInput from './TextInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { COLOURS } from '../../constants/constants';
import ActionBar from './ActionBar';

function EmgForm(props) {
    const { emg, setEmg, init } = props;

    const add = () => {
        setEmg([...emg, init]);
    }

    const remove = (i) => {
        const len = emg.length;
        setEmg([...emg.slice(0, i), ...emg.slice(i === len ? len : i + 1)])
    }

    const onChange = (key, i) => (e) => {
        const newArr = emg.slice(0);
        newArr[i][key] = e.target.value;
        setEmg(newArr);
    }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10, width: '100%' }}
        >
            <Grid container spacing={1} >
                <Grid container direction='row' alignItems='center'>
                    Emergency Detailes
                    <IconButton onClick={add}>
                        <AddCircleOutline color='primary' />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    {emg.map((obj, key) => (
                        <Card key={key}
                            style={{
                                position: 'relative',
                                margin: 8,
                                padding: 10,
                                borderStyle: 'groove',
                                borderColor: '#000000',
                                borderWidth: 1

                            }}
                        >
                            <Grid container spacing={1}>
                                <TextInput
                                    label="Name"
                                    value={obj.name}
                                    onChange={onChange('name', key)}
                                />
                                <TextInput
                                    label="NIC"
                                    value={obj.nic}
                                    onChange={onChange('nic', key)}

                                />
                                <TextInput
                                    label="Contact No."
                                    value={obj.contact_no}
                                    onChange={onChange('contact_no', key)}

                                />
                            </Grid>
                            <IconButton
                                onClick={() => remove(key)}
                                style={{
                                    margin: 0,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0
                                }}
                            >
                                <RemoveCircleOutline color='error' />
                            </IconButton>
                        </Card>
                    ))}
                </Grid>
                <ActionBar
                    b1={props.nextStep}
                    b2={props.prevStep}
                />
            </Grid >
        </Card>
    );

}

export default EmgForm;