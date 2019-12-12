import React, { useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import { Typography } from '@material-ui/core';

function EditableTable(props) {
    const [state, setState] = useState({
        columns: props.columns,
        data: props.data
    });
    const [error, setError] = useState(null);

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
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
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
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            },
                            () => {
                                setError('Error in updating row!')
                                reject();
                                console.log('rejected')
                            }
                        )
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        props.delete(oldData,
                            () => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            },
                            () => {
                                setError('Error in deleting row!')
                                reject();
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
                pageSizeOptions: [5, 10, 50]
            }}
            {...props}
        />
    );
}

export default EditableTable
