import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { PAY_GRADES, PAY_GRADES_ADD } from '../../constants/api';

function PayGradeManager() {

    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Pay Grades'
                columns={[
                    {
                        title: 'Pay Grade',
                        field: 'pay_grade',
                    }
                ]}
                dataApi={PAY_GRADES}
                insertApi={PAY_GRADES_ADD}
                updateApi={PAY_GRADES_ADD}
            />
        </Container>
    )

}

export default PayGradeManager
