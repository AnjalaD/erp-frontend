import React, { useState, useEffect } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import SelectInput from '../../components/form/SelectInput';
import { fetchData, makeOptions, getLocalDate } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_EMPLOYEES, DEPARTMENTS, LEAVE_REPORT } from '../../constants/api';
import CustomTable from '../../components/table/CustomTable';
import { COLOURS } from '../../constants/constants';
import TextInput from '../../components/form/TextInput';

function LeaveReports() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const currentDate = getLocalDate(new Date());

    const initState = {
        department: '',
        start_date: currentDate,
        end_date: currentDate,
    };


    const [state, setState] = useState(initState);
    const [fields, setFields] = useState([]);
    const [tableData, setTableData] = useState([]);

    const onChange = field => e => {
        setState({
            ...state,
            [field]: e.target.value
        })
    }

    const onSubmit = () => {
        fetchData(
            LEAVE_REPORT,
            makeOptions(token, 'POST', state),
            dispatch,
            res => res.json().then(res => setTableData(res))
        );
    }

    useEffect(() => {
        fetchData(
            DEPARTMENTS,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => {
                setState(prev => ({
                    ...prev,
                    department: res[0].dept_name
                }))
                setFields(res.map(item => item.dept_name));
            })
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
                        xs={4}
                        label='Employement-Status'
                        value={state.department}
                        selection={fields}
                        onChange={onChange('department')}
                    />
                    <TextInput
                        xs={3}
                        label='Start-Date'
                        value={state.start_date}
                        type='date'
                        onChange={onChange('start_date')}
                    />
                    <TextInput
                        xs={3}
                        label='End-Date'
                        value={state.end_date}
                        type='date'
                        onChange={onChange('end_date')}
                    />

                    <Grid item xs={1}>
                        <Button style={{
                            marginTop: 16,
                            padding: 10,
                            height: 55,
                            width: '100%',
                            backgroundColor: COLOURS.primary.darker,
                            color: COLOURS.primary.lighter
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
                                title: 'Job Title',
                                field: 'job_title'
                            },
                            {
                                title: 'Leave Type',
                                field: 'leave_type'
                            },
                            {
                                title: 'Leave State',
                                field: 'state'
                            },
                            {
                                title: 'Leave Date',
                                field: 'date'
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

export default LeaveReports
