import React from 'react'
import MaterialTable from 'material-table'
import { PrimaryTheme } from '../settings/Colours'

function CustomTable(props) {
    return (
        <MaterialTable
            title={props.title}
            columns={props.columns}
            data={props.data}
            options={{
                pageSize: props.pageSize || 10,
                pageSizeOptions: [5, 10, 50],
                actionsColumnIndex: -1,
                rowStyle: row => ({
                    backgroundColor: row.tableData.id % 2 === 0 ? PrimaryTheme.shades.lighter : '#FFF'
                }),
                ...props.options
            }}
            {...props}
        />
    );
}

export default CustomTable
