import React from 'react'
import MaterialTable from 'material-table'
import { useSelector } from 'react-redux';

function CustomTable(props) {
    const PrimaryTheme = useSelector(state => state.colors);
    const newProps = Object.assign({}, props);
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
                    backgroundColor: PrimaryTheme.light,
                },
                rowStyle: row => ({
                    backgroundColor: row.tableData.id % 2 === 0 ? PrimaryTheme.shades.lighter : '#FFF'
                }),
                ...props.options
            }}
            {...newProps}
        />
    );
}

export default CustomTable
