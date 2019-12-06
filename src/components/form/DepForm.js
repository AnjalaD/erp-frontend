import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Card } from '@material-ui/core';
import TextInput from './TextInput';
import { Add, Delete } from '@material-ui/icons';


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
                    Dependents Detailes <Button onClick={add}><Add /></Button>
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
                                <TextInput
                                    label="Relationship"
                                    value={obj.dob}
                                    onChange={onChange('relationship', key)}
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
                            <Button
                                variant='outlined'
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

export default DepForm;