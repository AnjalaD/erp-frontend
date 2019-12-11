import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Card } from '@material-ui/core';
import TextInput from './TextInput';
import { Add, Delete } from '@material-ui/icons';

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
                    Emergency Detailes <Button onClick={add}><Add /></Button>
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
                                    value={obj.first_name}
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
                            <Button
                                onClick={() => remove(key)}
                                style={{
                                    borderColor: '#000000',
                                    margin: 0,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0
                                }}
                            >
                                <Delete />
                            </Button>
                        </Card>
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={props.prevStep}
                    >Back</Button>

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={props.nextStep}
                    >Continue</Button>
                </Grid>
            </Grid >
        </Card>
    );

}

export default EmgForm;