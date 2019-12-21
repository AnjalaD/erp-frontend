import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import DepForm from './DepForm';
import Confirm from './Confirm';
import EmgForm from './EmgForm';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { EMP_FORM_FIELDS } from '../../constants/api';



function UserFormManager({ oldUser, submit = null }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const initUser = {
        "first_name": "",
        "last_name": "",
        "nic": "",
        "addr_house_no": "",
        "addr_line_1": "",
        "addr_line_2": "",
        "addr_city": "",
        "dob": "",
        "marital_status": "",
        "employment_status": "",
        "job_title": "",
        "dept_name": "",
        "pay_grade": ""
    };

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

    const [step, setStep] = useState(1);
    const [email, setEmail] = useState(oldUser ? oldUser.email.slice(0) : ['']);
    const [contact, setContact] = useState(oldUser ? oldUser.contact_no.slice(0) : ['']);
    const [user, setUser] = useState(oldUser ? Object.assign({}, oldUser) : initUser);
    const [custom, setCustom] = useState(oldUser ? oldUser.custom.slice(0) : []);
    const [dep, setDep] = useState(oldUser ? oldUser.dependents.slice(0) : [initDep]);
    const [emg, setEmg] = useState(oldUser ? oldUser.emergency_contacts.slice(0) : [initEmg]);
    const [formFields, setFormFields] = useState(initFormFields);

    useEffect(() => {
        fetchData(
            EMP_FORM_FIELDS,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setFormFields(res))
        )
    }, [dispatch, token]);

    // Proceed to next step
    const nextStep = (data) => {
        setStep(step + 1);
    };

    // Go back to prev step
    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step) {
        case 1:
            return (
                <UserForm
                    email={email}
                    setEmail={setEmail}
                    contact={contact}
                    setContact={setContact}
                    user={user}
                    setUser={setUser}
                    custom={custom}
                    setCustom={setCustom}
                    nextStep={nextStep}
                    formFields={formFields}
                />
            );
        case 2:
            return (
                <DepForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    dep={dep}
                    setDep={setDep}
                    init={initDep}
                />
            );
        case 3:
            return (
                <EmgForm
                    emg={emg}
                    setEmg={setEmg}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    init={initEmg}
                />
            );
        case 4:
            const newuser = {
                ...user,
                email: email,
                contact_no: contact,
                dependents: dep,
                emergency_contacts: emg
            }
            return (
                <Confirm
                    user={newuser} dep={dep} emg={emg}
                    submit={newuser => submit(newuser)}
                    prevStep={prevStep}
                />
            );
        default:
            return null;
    }
}

export default UserFormManager;