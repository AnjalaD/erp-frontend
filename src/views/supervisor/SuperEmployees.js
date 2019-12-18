import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import CustomTable from '../../components/table/CustomTable'
import { fetchData, makeOptions } from '../../util/helper';

function SuperEmployees() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [tableData, setTableData] = useState([]);

    const formatTableData = (data) => (
        data.map(obj => (
            [obj.employee_id, obj.first_name, obj.last_name, obj.contact_no[0], obj.email[0]]
        ))
    )

    useEffect(() => {
        fetchData(
            '',
            makeOptions(token),
            dispatch,
            (res) => res.json()
                .then(res => setTableData(formatTableData(res)))
        );
    }, [dispatch, token])

    return (
        <Container maxWidth='md'>
            <CustomTable
                headers={['Emp. ID', 'First-Name', 'Last-Name', 'Contact-No.', 'Email']}
                body={tableData}
            />
        </Container>
    )

}

export default SuperEmployees
