import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loading } from '../../redux/actions';
import UserForm from './UserForm';
import DepForm from './DepForm';
import Confirm from './Confirm';
import EmgForm from './EmgFrom';


function UserFormManager(props) {
    const disptch = useDispatch();

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
        "pay_grade": "",
        "custom_attributes": [
            {
                attribute: 'attr',
                value: ''
            },
            {
                attribute: 'addwd',
                value: ''
            }
        ]
    }

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

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState(['']);
    const [contact, setContact] = useState(['']);
    const [user, setUser] = useState(initUser);
    const [dep, setDep] = useState([initDep]);
    const [emg, setEmg] = useState([initEmg]);

    //load field -(custom,job-title,...)
    useEffect(() => { }, []);

    const submit = () => {
        disptch(loading(true));
        const data = {};

        const options = {
            method: 'POST',

        }

        fetch('', options)
            .then()
            .catch(err => console.log(err))
            .finally(() => disptch(loading(false)))

    }


    // Proceed to next step
    const nextStep = (data) => {
        setStep(step + 1);
    };

    // Go back to prev step
    const prevStep = () => {
        setStep(step - 1);
    };

    // Handle fields change


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
                    nextStep={nextStep}
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
            return (
                <Confirm
                    user={{
                        ...user,
                        email: email,
                        contact_no: contact,
                    }} dep={dep} emg={emg}
                    submit={submit}
                    prevStep={prevStep}
                />
            );
        default:
            return null;
    }
}

export default UserFormManager;