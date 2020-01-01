import React, { useState, useEffect } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import { Typography } from '@material-ui/core';
import { PrimaryTheme } from '../settings/Colours'

function EditableTable(props) {
    const [state, setState] = useState({
        columns: [...props.columns],
        data: [...props.data]
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        setState({
            columns: [...props.columns],
            data: [...props.data]
        })
    }, [props.data, props.columns])

    return (
        <MaterialTable
            title={props.title}
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        props.insert(
                            newData,
                            () => {
                                setError(null);
                                resolve();
                                window.location.reload();
                            },
                            () => {
                                setError('Error in adding row!')
                                reject();
                            }
                        )
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        // reject();
                        // console.log('rejected');
                        props.update(newData, oldData,
                            () => {
                                setError(null);
                                resolve();
                                console.log('resolved')
                                window.location.reload();
                            },
                            () => {
                                setError('Error in updating row!')
                                reject();
                                console.log('rejected')
                            }
                        )
                    }),
            }}
            components={{
                Toolbar: props => (
                    <div>
                        <MTableToolbar {...props} />
                        <Typography align='center' variant='body2' color='error'>
                            {error ? '*' + error : ''}
                        </Typography>
                    </div>
                )
            }}
            options={{
                actionsColumnIndex: -1,
                pageSize: 10 || props.pageSize,
                pageSizeOptions: [5, 10, 50],
                headerStyle: {
                    backgroundColor: PrimaryTheme.light,
                },
                rowStyle: row => ({
                    backgroundColor: row.tableData.id % 2 === 0 ? PrimaryTheme.shades.lighter : '#FFF'
                })
            }}
            {...props}
        />
    );
}

export default EditableTable
