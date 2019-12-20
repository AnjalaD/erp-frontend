import React from 'react'
import MaterialTable from 'material-table'
import { COLOURS } from '../../constants/constants';

function CustomTable(props) {
    return (
        <MaterialTable
            title={props.title}
            columns={props.columns}
            data={props.data}
            options={{
                pageSize: props.pageSize || 10,
                pageSizeOptions: [5, 10, 50],
                rowStyle: row => ({
                    backgroundColor: row.tableData.id % 2 === 0 ? COLOURS.primary.lighter : '#FFF'
                })
            }}
            {...props}
        />
    );
}

export default CustomTable
