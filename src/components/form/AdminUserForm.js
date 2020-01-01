import React, { useState, useEffect } from 'react'
import UserForm from './UserForm'
import { fetchData, makeOptions, getLocalDate } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { EMP_FORM_FIELDS, HR_AVAILABILITY } from '../../constants/api';


function AdminUserForm(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const currentDate = getLocalDate(new Date('2000-01-01'));
    const initUser = {
        "first_name": "",
        "last_name": "",
        "nic": "",
        "addr_house_no": "",
        "addr_line_1": "",
        "addr_line_2": "",
        "addr_city": "",
        "dob": currentDate,
        "marital_status": "",
        "employment_status": "",
        "job_title": "",
        "dept_name": "",
        "pay_grade": "",
        "gender": ''
    };
    const initFormFields = {
        job_title: [],
        pay_grade: [],
        employment_status: [],
        dept_name: []
    }

    const [formFields, setFormFields] = useState(initFormFields);
    const [user, setUser] = useState(initUser);

    const submit = () => {
        fetchData(
            HR_AVAILABILITY,
            makeOptions(token, 'POST', user),
            dispatch,
            res => res.json().then(props.nextStep)
        )
    }

    useEffect(() => {
        fetchData(
            EMP_FORM_FIELDS,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setFormFields(res))
        )
    }, [dispatch, token]);

    return (
        <UserForm
            user={user}
            setUser={setUser}
            nextStep={submit}
            prevStep={props.prevStep}
            formFields={formFields}
        />
    )
}

export default AdminUserForm
