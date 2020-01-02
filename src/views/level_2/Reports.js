import React, { useState, useEffect } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import SelectInput from '../../components/form/SelectInput';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { EMP_FORM_FIELDS, FILTER_EMPLOYEES } from '../../constants/api';
import CustomTable from '../../components/table/CustomTable';

function Reports() {
    const PrimaryTheme = useSelector(state => state.colors);

    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const initState = {
        employment_status: "ALL",
        dept_name: "ALL",
        active_status: "ALL",
        marital_status: "ALL",
        job_title: "ALL",
        pay_grade: "ALL"
    };
    const map_active_status = {
        'Active': '1',
        'Inactive': '0',
        'ALL': 'ALL',
        '1': 'Active',
        '0': 'Inactive'
    }

    const initFields = {
        job_title: [],
        marital_status: [],
        dept_name: [],
        pay_grade: [],
        employment_status: [],
        active_status: []
    }

    const [state, setState] = useState(initState);
    const [fields, setFields] = useState(initFields);
    const [tableData, setTableData] = useState([]);

    const onChange = field => e => {
        setState({
            ...state,
            [field]: e.target.value
        })
    }

    const onSubmit = () => {
        fetchData(
            FILTER_EMPLOYEES,
            makeOptions(token, 'POST', {
                ...state,
                active_status: map_active_status[state.active_status]
            }),
            dispatch,
            res => res.json()
                .then(res => setTableData(res.map(item => ({
                    ...item,
                    active_status: map_active_status[item.active_status]
                }))))
        );
    }

    useEffect(() => {
        fetchData(
            EMP_FORM_FIELDS,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setFields(res))
        );
    }, [dispatch, token]);



    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid container direction="row"
                    spacing={1}
                    justify='center'
                >
                    <SelectInput
                        xs={2}
                        label='Employement-Status'
                        value={state.employment_status}
                        selection={['ALL', ...fields.employment_status]}
                        onChange={onChange('employment_status')}
                    />
                    <SelectInput
                        xs={2}
                        label='Department'
                        value={state.dept_name}
                        selection={['ALL', ...fields.dept_name]}
                        onChange={onChange('dept_name')}
                    />
                    <SelectInput
                        xs={2}
                        label='Job-title'
                        value={state.job_title}
                        selection={['ALL', ...fields.job_title.map(item => item.job_title)]}
                        onChange={onChange('job_title')}
                    />
                    <SelectInput
                        xs={2}
                        label='Pay-Grade'
                        value={state.pay_grade}
                        selection={['ALL', ...fields.pay_grade]}
                        onChange={onChange('pay_grade')}
                    />
                    <SelectInput
                        xs={2}
                        label='Active'
                        value={state.active_status}
                        selection={['ALL', 'Active', 'Inactive']}
                        onChange={onChange('active_status')}
                    />
                    <Grid item xs={1}>
                        <Button style={{
                            marginTop: 16,
                            padding: 10,
                            height: 55,
                            width: '100%',
                            backgroundColor: PrimaryTheme.shades.darker,
                            color: PrimaryTheme.shades.lighter
                        }}
                            variant="contained"
                            onClick={onSubmit}
                        >Submit</Button>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <CustomTable
                        title='Employee-Report'
                        columns={[
                            {
                                title: 'Emp ID',
                                field: 'employee_id'
                            },
                            {
                                title: 'First Name',
                                field: 'first_name'
                            },
                            {
                                title: 'Last Name',
                                field: 'last_name'
                            },
                            {
                                title: 'NIC',
                                field: 'nic'
                            },
                            {
                                title: 'Department',
                                field: 'dept_name'
                            },
                            {
                                title: 'Job Title',
                                field: 'job_title'
                            },
                            {
                                title: 'Pay-Grade',
                                field: 'pay_grade'
                            },
                            {
                                title: 'Emp Status',
                                field: 'employment_status'
                            },
                            {
                                title: 'Active',
                                field: 'active_status'
                            }
                        ]}
                        data={tableData}
                        options={{
                            exportButton: true
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Reports
