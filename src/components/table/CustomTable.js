import React from 'react'
import MaterialTable from 'material-table'
import { PrimaryTheme } from '../settings/Colours'

function CustomTable(props) {
    const options = Object.assign(props.options);
    delete props.options;

    return (
        <MaterialTable
            title={props.title}
            columns={props.columns}
            data={props.data}
            options={{
                actionsColumnIndex: -1,
                pageSize: props.pageSize || 10,
                pageSizeOptions: [5, 10, 50],
                headerStyle: {
                    backgroundColor: PrimaryTheme.code,
                },
                rowStyle: row => ({
                    backgroundColor: row.tableData.id % 2 === 0 ? PrimaryTheme.shades.lighter : '#FFF'
                }),
                ...options
            }}
            {...props}
        />
    );
}

export default CustomTable
