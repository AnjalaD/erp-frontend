import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { LEAVE_LIMITS, PAY_GRADES, LEAVE_TYPES, LEAVE_LIMITS_ADD } from '../../constants/api';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { fetchData, makeOptions } from '../../util/helper';

function LeaveLimitManager() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [state, setState] = useState({
        pay_grade: {},
        leave_type: {}
    })

    useEffect(() => {
        fetchData(
            PAY_GRADES,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => {
                const data = {};
                res.forEach(element => {
                    data[element.pay_grade] = element.pay_grade
                });
                console.log(data);
                setState(pevState => ({
                    ...pevState,
                    pay_grade: data
                }));
            })
        );
        fetchData(
            LEAVE_TYPES,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => {
                const data = {};
                res.forEach(element => {
                    data[element.leave_type] = element.leave_type
                });
                console.log(data);
                setState(pevState => ({
                    ...pevState,
                    leave_type: data
                }));
            })
        )
    }, [dispatch, token]);


    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Leave '
                columns={[
                    {
                        title: 'Pay Grade',
                        field: 'pay_grade',
                        editable: 'onAdd',
                        lookup: state.pay_grade
                    },
                    {
                        title: 'Leave Type',
                        field: 'leave_type',
                        editable: 'onAdd',
                        lookup: state.leave_type
                    },
                    {
                        title: 'Annual Limit',
                        field: 'limit',
                    }
                ]}
                dataApi={LEAVE_LIMITS}
                insertApi={LEAVE_LIMITS_ADD}
                updateApi={LEAVE_LIMITS}
                insertMethod='PUT'
            />
        </Container>
    )

}

export default LeaveLimitManager