import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Card, IconButton } from '@material-ui/core';
import TextInput from './TextInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import SelectInput from './SelectInput';
import { COLOURS } from '../../constants/constants';


function DepForm(props) {

    const { dep, setDep, init } = props;


    const add = () => {
        setDep([...dep, init]);
    }

    const remove = (i) => {
        const len = dep.length;
        setDep([...dep.slice(0, i), ...dep.slice(i === len ? len : i + 1)])
    }

    const onChange = (key, i) => (e) => {
        const newArr = dep.slice(0);
        newArr[i][key] = e.target.value;
        setDep(newArr);
    }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10 }}
        >
            <Grid container spacing={1} >
                <Grid container direction='row' alignItems='center'>
                    Dependents Detailes
                    <IconButton onClick={add}>
                        <AddCircleOutline color='primary' />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    {dep.map((obj, key) => (
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
                                    label="First Name"
                                    value={obj.first_name}
                                    onChange={onChange('first_name', key)}
                                />
                                <TextInput
                                    label="Last Name"
                                    value={obj.last_name}
                                    onChange={onChange('last_name', key)}
                                />
                                <TextInput
                                    label="NIC"
                                    value={obj.nic}
                                    onChange={onChange('nic', key)}
                                />
                                <SelectInput
                                    label="Relationship"
                                    value={obj.relationship}
                                    onChange={onChange('relationship', key)}
                                    selection={[
                                        'Father', 'Mother', 'Son', 'Daughter', 'Other'
                                    ]}
                                />
                                <TextInput
                                    label="Address-House No."
                                    value={obj.addr_house_no}
                                    onChange={onChange('addr_house_no', key)}
                                />
                                <TextInput
                                    label="Address-Line 1"
                                    value={obj.addr_line_1}
                                    onChange={onChange('addr_line_1', key)}
                                />
                                <TextInput
                                    label="Address-Line 2"
                                    required={false}
                                    value={obj.addr_line_2}
                                    onChange={onChange('addr_line_2', key)}
                                />
                                <TextInput
                                    label="Address-City"
                                    value={obj.addr_city}
                                    onChange={onChange('addr_city', key)}
                                />
                                <TextInput xs={12}
                                    label="Email"
                                    value={obj.email}
                                    onChange={onChange('email', key)}
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
                <Grid item xs={12} style={{ margin: 30, padding: 10 }} align="right">
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.lighter, color: COLOURS.primary.darker }}
                        variant="contained"
                        onClick={props.prevStep}
                    >Back</Button>

                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                        variant="contained"
                        onClick={props.nextStep}
                    >Continue</Button>
                </Grid>
            </Grid >
        </Card>
    );

}

export default DepForm;