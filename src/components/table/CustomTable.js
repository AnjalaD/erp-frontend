import React from 'react'
import MaterialTable from 'material-table'
import { COLOURS } from '../../constants/constants';

function CustomTable(props) {
    const newProps = Object.assign(props);
    delete newProps.options;

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
                    backgroundColor: COLOURS.primary.light,
                },
                rowStyle: row => ({
                    backgroundColor: row.tableData.id % 2 === 0 ? '#EFE' : '#FFF'
                }),
                ...props.options
            }}
            {...newProps}
        />
    );
}

export default CustomTable
