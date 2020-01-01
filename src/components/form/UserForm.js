import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import TextInput from './TextInput';
import MultiTextInput from './MultiTextInput';
import SelectInput from './SelectInput';
import ActionBar from './ActionBar';

function UserForm(props) {
    const { email, setEmail, contact, setContact, user, setUser, formFields, custom, setCustom } = props;

    const userHandler = (key) => (e) => {
        setUser(Object.assign({}, user, {
            [key]: e.target.value
        }))
    }

    const customHandler = (i) => (e) => {
        const newArr = custom.slice(0);
        newArr[i].value = e.target.value;
        setCustom(newArr);
    }

    const onMultiChange = (value, setter, type) => (e, i) => {
        const newMulti = value.slice(0)
        newMulti[i] = {
            [type]: e.target.value
        };
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
                    type="date"
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
                    label="Gender"
                    value={user.gender}
                    onChange={userHandler('gender')}
                    selection={[
                        'Male', 'Female'
                    ]}
                />
                <SelectInput
                    label="Marital Status"
                    value={user.marital_status}
                    onChange={userHandler('marital_status')}
                    selection={[
                        'Single', 'Married', 'Divorsed'
                    ]}
                />
                <SelectInput
                    label="Employment Status"
                    value={user.employment_status}
                    onChange={userHandler('employment_status')}
                    selection={formFields.employment_status}
                />
                <SelectInput
                    label="Department"
                    value={user.dept_name}
                    onChange={userHandler('dept_name')}
                    selection={formFields.dept_name}
                />
                <SelectInput
                    label="Job Title"
                    value={user.job_title}
                    onChange={userHandler('job_title')}
                    selection={formFields.job_title.map(obj => obj.job_title)}
                />
                <SelectInput
                    label="Pay Grade"
                    value={user.pay_grade}
                    onChange={userHandler('pay_grade')}
                    selection={formFields.pay_grade}
                />

                {
                    email ?
                        <MultiTextInput
                            label="Email"
                            value={email.map(item => item.email)}
                            type='email'
                            add={() => setEmail([...email, { email: '' }])}
                            onChange={onMultiChange(email, setEmail, 'email')}
                            remove={multiRemove(email, setEmail)}
                        />
                        : null
                }
                {
                    contact ?
                        <MultiTextInput
                            label="Contact No"
                            value={contact.map(item => item.contact_no)}
                            add={() => setContact([...contact, { contact_no: '' }])}
                            onChange={onMultiChange(contact, setContact, 'contact_no')}
                            remove={multiRemove(contact, setContact)}
                        />
                        : null
                }
                {custom.map(({ attribute, value }, i) =>
                    (
                        <TextInput key={i} xs={12}
                            label={attribute}
                            value={value}
                            onChange={customHandler(i)}
                        />
                    )
                )}
                <ActionBar
                    b1={props.prevStep}
                    b2={props.nextStep}
                />
            </Grid >
        </Card>
    );

}

export default UserForm;