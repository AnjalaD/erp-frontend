import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Card, Typography } from '@material-ui/core';
import TextInput from './TextInput';
import MultiTextInput from './MultiTextInput';
import SelectInput from './SelectInput';
import { COLOURS } from '../../constants/constants';

function UserForm(props) {
    const { email, setEmail, contact, setContact, user, setUser } = props;

    const userHandler = (key) => (e) => {
        setUser(Object.assign({}, user, {
            [key]: e.target.value
        }))
    }

    const customHandler = (index) => (e) => {
        const newCustom = user.custom_attributes;
        newCustom[index]['value'] = e.target.value;
        setUser(Object.assign({}, user, {
            custom_attributes: newCustom
        }))
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
            <Grid container spacing={1} alignItems='center'>
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
                <SelectInput
                    label="Marital Status"
                    value={user.marital_status}
                    onChange={userHandler('marital_status')}
                    selection={[
                        { label: 'Single', value: 'single' },
                        { label: 'Married', value: 'married' }
                    ]}
                />
                <SelectInput
                    label="Job Title"
                    value={user.job_title}
                    onChange={userHandler('job_title')}
                    selection={[]}
                />
                <SelectInput
                    label="Pay Grade"
                    value={user.pay_grade}
                    onChange={userHandler('pay_grade')}
                    selection={[]}
                />
                <SelectInput
                    label="Employement Status"
                    value={user.employement_status}
                    onChange={userHandler('employement_status')}
                    selection={[]}
                />
                <MultiTextInput
                    label="Email"
                    value={email}
                    type='email'
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
                {user.custom_attributes.map(({ attribute, value }, i) =>
                    (
                        <TextInput key={i} xs={12}
                            label={attribute}
                            value={value}
                            onChange={customHandler(i)}
                        />
                    )
                )}
                <Grid item xs={12} style={{margin:30, padding:10}} align="right">
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color:COLOURS.primary.lighter}}
                        variant="contained"
                        onClick={props.nextStep}
                    >Continue</Button>
                </Grid>
            </Grid >
        </Card>
    );

}

export default UserForm;