import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import DepForm from './DepForm';
import EmgForm from './EmgForm';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { EMP_FORM_FIELDS, EDIT_EMP_BASIC_INFO, EDIT_EMP_CONTACTS, EDIT_EMP_EMAILS, EDIT_EMP_DEPENDENTS, EDIT_EMP_EMG_CONTACTS } from '../../constants/api';
import Profile from '../profile/Profile';
import { Grid, Button } from '@material-ui/core';
import { COLOURS } from '../../constants/constants';
import ActionBar from './ActionBar';
import EmgContact from '../profile/EmgContact';
import EmailContactForm from './EmailContactForm';
import EmailContact from '../profile/EmailContact';

const button2Style = {
    width: '100%',
    color: COLOURS.primary.darker,
    backgroundColor: COLOURS.primary.lighter
}

function EditUserFormManager({ oldUser }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const initEmg = {
        "nic": "",
        "name": "",
        "contact_no": ""
    };

    const initDep = {
        "nic": "",
        "first_name": "",
        "last_name": "",
        "relationship": "",
        "addr_house_no": "",
        "addr_line_1": "",
        "addr_line_2": "",
        "addr_city": "",
        "contact_no": "",
        "email": ""
    };

    const initFormFields = {
        job_title: [],
        marital_status: [],
        pay_grade: [],
        employment_status: []
    }

    const [step, setStep] = useState(0);
    const [email, setEmail] = useState([...oldUser.email]);
    const [contact, setContact] = useState([...oldUser.contact_no]);
    const [user, setUser] = useState(Object.assign({}, oldUser.employee));
    const [custom, setCustom] = useState([...oldUser.custom]);
    const [dep, setDep] = useState([...oldUser.dependents]);
    const [emg, setEmg] = useState([...oldUser.emergency_contacts]);
    const [formFields, setFormFields] = useState(initFormFields);

    useEffect(() => {
        fetchData(
            EMP_FORM_FIELDS,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setFormFields(res))
        )
    }, [dispatch, token]);

    const submit = (url, data) => {
        fetchData(
            url,
            makeOptions(token, 'POST', data),
            dispatch,
            () => setStep(0)
        );
    }

    switch (step) {
        case 0:
            return (
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <Button variant='contained' style={button2Style} onClick={() => setStep(1)}>
                            Edit Basic Details
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Button variant='contained' style={button2Style} onClick={() => setStep(3)} >
                            Edit Emails
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Button variant='contained' style={button2Style} onClick={() => setStep(5)} >
                            Edit Contact No.
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Button variant='contained' style={button2Style} onClick={() => setStep(7)}>
                            Edit Dependent details
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Button variant='contained' style={button2Style} onClick={() => setStep(9)} >
                            Edit Emergency No.
                        </Button>
                    </Grid >
                </Grid >
            )
        case 1:
            return (
                <UserForm
                    user={user}
                    setUser={setUser}
                    custom={custom}
                    setCustom={setCustom}
                    nextStep={() => setStep(2)}
                    formFields={formFields}
                />
            );
        case 2:
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Profile data={user} />
                    </Grid>
                    <Grid item xs={12}>

                        <ActionBar
                            b1={() => setStep(1)}
                            b2={() => submit(EDIT_EMP_BASIC_INFO, {
                                employee: user
                            })}
                        />
                    </Grid>
                </Grid>
            );
        case 3:
            return (
                <EmailContactForm
                    value={email}
                    setter={setEmail}
                    init=''
                    prevStep={() => setStep(0)}
                    nextStep={() => setStep(4)}
                />
            );
        case 4:
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <EmailContact
                            data={email}
                            label='Email'
                            type='email'
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <ActionBar
                            b1={() => setStep(7)}
                            b2={() => submit(EDIT_EMP_EMAILS, {
                                email: email
                            })}
                        />
                    </Grid>
                </Grid>
            );
        case 5:
            return (
                <EmailContactForm
                    value={contact}
                    setter={setContact}
                    init=''
                    prevStep={() => setStep(0)}
                    nextStep={() => setStep(6)}
                />
            );
        case 6:
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <EmailContact
                            data={contact}
                            label='Contact'
                            type='contact'
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <ActionBar
                            b1={() => setStep(7)}
                            b2={() => submit(EDIT_EMP_CONTACTS, {
                                contact_no: contact
                            })}
                        />
                    </Grid>
                </Grid>
            );
        case 7:
            return (
                <DepForm
                    nextStep={() => setStep(8)}
                    prevStep={() => setStep(0)}
                    dep={dep}
                    setDep={setDep}
                    init={initDep}
                />
            );
        case 8:
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Profile data={dep} />
                    </Grid>
                    <Grid item xs={12}>

                        <ActionBar
                            b1={() => setStep(7)}
                            b2={() => submit(EDIT_EMP_DEPENDENTS, {
                                dependents: dep
                            })}
                        />
                    </Grid>
                </Grid>

            );
        case 9:
            return (
                <EmgForm
                    emg={emg}
                    setEmg={setEmg}
                    nextStep={() => setStep(10)}
                    prevStep={() => setStep(9)}
                    init={initEmg}
                />
            );
        case 10:
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <EmgContact
                            data={emg}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <ActionBar
                            b1={() => setStep(9)}
                            b2={() => submit(EDIT_EMP_EMG_CONTACTS, {
                                emergency_contacts: emg
                            })}
                        />
                    </Grid>
                </Grid>
            );
        default:
            return null;
    }
}

export default EditUserFormManager
