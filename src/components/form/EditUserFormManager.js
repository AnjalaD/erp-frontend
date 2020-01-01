import React, { useState, useEffect, Fragment } from 'react';
import UserForm from './UserForm';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { EMP_FORM_FIELDS, EDIT_EMP_BASIC_INFO, EDIT_EMP_CONTACTS, EDIT_EMP_EMAILS } from '../../constants/api';
import Profile from '../profile/Profile';
import { Grid, Button } from '@material-ui/core';
import { COLOURS, LEVEL3 } from '../../constants/constants';
import ActionBar from './ActionBar';
import EmailContactForm from './EmailContactForm';
import EditEmgForm from './EditEmgForm';
import EditDepForm from './EditDepForm';
import EditCustomForm from './EditCustomForm';
import FullProfile from '../profile/FullProfile';
import RegisterEmployee from '../../views/level_3/RegisterEmployee';
import ResetPassword from '../../views/level_3/ResetPassword';

const buttonStyle = {
    height: 40,
    width: '100%',
    color: COLOURS.primary.darker,
    backgroundColor: COLOURS.primary.lighter
}

const dangerButtonStyle = {
    height: 40,
    width: '100%',
    color: 'danger',
    backgroundColor: COLOURS.primary.lighter
}

function EditUserFormManager({ oldUser, reload }) {
    const dispatch = useDispatch();
    const { access_level, token } = useSelector(state => state.status);

    const initFormFields = {
        job_title: [],
        marital_status: [],
        pay_grade: [],
        employment_status: []
    }

    const id = oldUser.employee.employee_id;
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState([...oldUser.email]);
    const [contact, setContact] = useState([...oldUser.contact_no]);
    const [user, setUser] = useState(Object.assign({}, oldUser.employee));
    const [custom, setCustom] = useState([...oldUser.custom]);
    const [dep, setDep] = useState([...oldUser.dependents]);
    const [emg, setEmg] = useState([...oldUser.emergency_contacts]);
    const [formFields, setFormFields] = useState(initFormFields);

    useEffect(() => {
        setEmail([...oldUser.email]);
        setContact([...oldUser.contact_no]);
        setUser(Object.assign({}, oldUser.employee));
        setCustom([...oldUser.custom]);
        setDep([...oldUser.dependents]);
        setEmg([...oldUser.emergency_contacts]);
    }, [oldUser])

    useEffect(() => {
        fetchData(
            EMP_FORM_FIELDS,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setFormFields(res))
        )
    }, [dispatch, token]);

    const home = () => {
        reload(prev => prev + 1);
        setStep(0);
    }

    const submit = (url, data) => {
        fetchData(
            url,
            makeOptions(token, 'PATCH', {
                new: data,
            }),
            dispatch,
            home
        );
    }

    switch (step) {
        case 0:
            return (
                <Fragment>
                    <Grid container spacing={2} style={{ marginTop: 24 }} justify='center'>
                        <Grid item xs={5} >
                            <Button variant='contained' style={buttonStyle} onClick={() => setStep(1)}>
                                Edit Basic Details
                        </Button>
                        </Grid>
                        <Grid item xs={5} >
                            <Button variant='contained' style={buttonStyle} onClick={() => setStep(3)} >
                                Edit Custom Details
                            </Button>
                        </Grid>
                        <Grid item xs={5} >
                            <Button variant='contained' style={buttonStyle} onClick={() => setStep(4)} >
                                Edit Emails
                            </Button>
                        </Grid>
                        <Grid item xs={5} >
                            <Button variant='contained' style={buttonStyle} onClick={() => setStep(5)} >
                                Edit Contact No.
                            </Button>
                        </Grid>
                        <Grid item xs={5} >
                            <Button variant='contained' style={buttonStyle} onClick={() => setStep(7)}>
                                Edit Dependent details
                            </Button>
                        </Grid>
                        <Grid item xs={5} >
                            <Button variant='contained' style={buttonStyle} onClick={() => setStep(9)} >
                                Edit Emergency No.
                            </Button>
                        </Grid >
                        {
                            access_level === LEVEL3 ?
                                <Fragment>
                                    <Grid item xs={5} >
                                        <Button variant='contained' style={buttonStyle} onClick={() => setStep(10)}>
                                            Register User
                                    </Button>
                                    </Grid>
                                    <Grid item xs={5} >
                                        <Button variant='contained' style={buttonStyle} onClick={() => setStep(11)} >
                                            Reset User Account
                                    </Button>
                                    </Grid >
                                    {
                                        oldUser.employee.active_state === 1 ?
                                            <Grid item xs={5} >
                                                <Button variant='contained' style={dangerButtonStyle} onClick={() => setStep(9)} >
                                                    Remove Employee
                                                </Button>
                                            </Grid >
                                            :
                                            <Grid item xs={5} >
                                                <Button variant='contained' style={buttonStyle} onClick={() => setStep(9)} >
                                                    Employee
                                                </Button>
                                            </Grid >
                                    }
                                </Fragment>
                                : null
                        }
                    </Grid >
                    <FullProfile profile={oldUser} style={{ marginTop: 24 }} />
                </Fragment >
            )
        case 1:
            return (
                <UserForm
                    id={id}
                    user={user}
                    setUser={setUser}
                    custom={[]}
                    setCustom={setCustom}
                    nextStep={() => setStep(2)}
                    prevStep={() => home()}
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
                            b2={() => submit(EDIT_EMP_BASIC_INFO, user)}
                        />
                    </Grid>
                </Grid>
            );
        case 3:
            return (
                <EditCustomForm
                    id={id}
                    value={custom}
                    prevStep={() => home()}
                    nexStep={() => { }}
                />
            );
        case 4:
            return (
                <EmailContactForm
                    id={id}
                    type='email'
                    label='Email'
                    value={email}
                    prevStep={() => home()}
                    api={EDIT_EMP_EMAILS}
                />
            );
        case 5:
            return (
                <EmailContactForm
                    id={id}
                    label='Contact-No.'
                    type='contact_no'
                    value={contact}
                    prevStep={() => home()}
                    api={EDIT_EMP_CONTACTS}
                />
            );
        case 7:
            return (
                <EditDepForm
                    id={id}
                    prevStep={() => home()}
                    dep={dep}
                />
            );
        case 9:
            return (
                <EditEmgForm
                    id={id}
                    emg={emg}
                    prevStep={() => home()}
                />
            );
        case 10:
            return (
                <RegisterEmployee id={id} back={home} />
            );
        case 11:
            return (
                <ResetPassword id={id} back={home} />
            );
        default:
            return null;
    }
}

export default EditUserFormManager
