import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import EditableTable from '../../components/table/EditableTable';

function ExtendedEditableTable(props) {
    const { insertMethod, updateMethod } = props;
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const cleanObj = (obj) => {
        const newObj = { ...obj }
        delete newObj.tableData;
        return newObj;
    }

    const [dbData, setDbData] = useState([]);

    //fetch leaveLimit from db
    useEffect(() => {
        fetchData(
            props.dataApi,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setDbData(res))
        );
    }, [dispatch, token, props.dataApi]);

    const update = (newData, oldData, onSuccess, onFail) => {
        console.log('newData', newData, oldData);
        fetchData(
            props.updateApi,
            makeOptions(token, updateMethod || 'PATCH', {
                new: cleanObj(newData),
                old: cleanObj(oldData)
            }),
            dispatch,
            onSuccess,
            onFail
        )
    };

    const insert = (newData, onSuccess, onFail) => {
        console.log('newData', newData);
        fetchData(
            props.insertApi,
            makeOptions(token, insertMethod || 'POST', cleanObj(newData)),
            dispatch,
            onSuccess,
            onFail
        )
    };

    return (
        <EditableTable
            title={props.title}
            columns={props.columns}
            data={dbData}
            insert={insert}
            update={update}
        />
    )

}

export default ExtendedEditableTable