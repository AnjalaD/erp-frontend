import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Card, Typography } from '@material-ui/core';
import TextInput from './TextInput';
import MultiTextInput from './MultiTextInput';

function UserForm(props) {
    const { email, setEmail, contact, setContact, user, setUser } = props;

    const userHandler = (key) => (e) => {
        setUser(Object.assign({}, user, {
            [key]: e.target.value
        }))
    }

    const customHandler = (key) => (e) => {
        const newCustom = user.custom_attributes;
        newCustom[key] = e.target.value;
        setUser(Object.assign({}, user, {
            custom_attributes: newCustom
        }))
    }

    const custom_attr_fields = () => {
        const custom = [];
        if (user.custom_attributes) {
            Object.keys(user.custom_attributes).forEach((key, i) =>
                custom.push(
                    <TextInput key={i} xs={12}
                        label={key}
                        value={user.custom_attributes[key]}
                        onChange={customHandler(key)}
                    />
                )
            )
        }
        return custom;
    }

    const onMultiChange = (value, setter) => (e, i) => {
        const newMulti = value.slice(0)
        newMulti[i] = e.target.value;
        setter(newMulti);
    }
    const multiRemove = (value, setter) => (i) => {
        const newVal = value.slice(0);
        newVal.splice(i, 1);
        setter(newVal);
    }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10 }}
        >
            <Typography variant="h4" style={{ width: '100%', textAlign: 'center' }}>
                User Detailes
            </Typography>
            <Grid container spacing={1} >
                <TextInput
                    label="First Name"
                    value={user.first_name}
                    onChange={userHandler('first_name')}
                />
                <TextInput
                    label="Last Name"
                    value={user.last_name}
                    onChange={userHandler('last_name')}
                />
                <TextInput
                    label="NIC"
                    value={user.nic}
                    onChange={userHandler('nic')}
                />
                <TextInput
                    label="Birthday"
                    value={user.dob}
                    onChange={userHandler('dob')}
                />
                <TextInput
                    label="Address-House No."
                    value={user.addr_house_no}
                    onChange={userHandler('addr_house_no')}
                />
                <TextInput
                    label="Address-Line 1"
                    value={user.addr_line_1}
                    onChange={userHandler('addr_line_1')}
                />
                <TextInput
                    label="Address-Line 2"
                    required={false}
                    value={user.addr_line_2}
                    onChange={userHandler('addr_line_2')}
                />
                <TextInput
                    label="Address-City"
                    value={user.addr_city}
                    onChange={userHandler('addr_city')}
                />
                <TextInput
                    label="Marital Status"
                    value={user.marital_status}
                    onChange={userHandler('marital_status')}
                />
                <TextInput
                    label="Job Title"
                    value={user.job_title}
                />
                <TextInput
                    label="Pay Grade"
                    value={user.pay_grade}
                />
                <TextInput
                    label="Employment Status"
                    value={user.employement_status}
                />
                <MultiTextInput
                    label="Email"
                    value={email}
                    add={() => setEmail([...email, ''])}
                    onChange={onMultiChange(email, setEmail)}
                    remove={multiRemove(email, setEmail)}
                />
                <MultiTextInput
                    label="Contact No"
                    value={contact}
                    add={() => setContact([...contact, ''])}
                    onChange={onMultiChange(contact, setContact)}
                    remove={multiRemove(contact, setContact)}
                />
                {custom_attr_fields()}
                <Grid item xs={12}>
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

export default UserForm;