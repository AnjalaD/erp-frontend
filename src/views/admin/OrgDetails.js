import React, { useState, useEffect } from 'react';
import MultiDualTextInput from '../../components/form/MultiDualTextInput';
import { loading } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { ORG_VIEW, ORG_INSERT, ORG_DELETE } from '../../constants/api';
import OrgDetailsCard from '../../components/profile/OrgDetails';
import { Card, Container } from '@material-ui/core';
import { COLOURS } from '../../constants/constants';


export default function OrgDetails() {
    const dispatch = useDispatch();

    const initState = {
        key: '',
        value: ''
    }

    const [dbkv, setDbkv] = useState([]);
    const [kv, setKv] = useState([initState]);
    const [error, setError] = useState(null);
    const [loadAgain, setLoadAgian] = useState(0);

    const setterForDbkv = (value) => setDbkv(value);

    const setterForError = (value) => setError(value);

    useEffect(() => {
        dispatch(loading());
        fetch(ORG_VIEW, { method: 'POST' })
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    res.json()
                        .then((res) => {
                            setterForDbkv([...res.result]);
                        })
                }
            })
            .finally(() => dispatch(loading(false)));
    }, [dispatch, loadAgain])

    const onChange = (index, field) => e => {
        const newKv = kv.slice(0);
        newKv[index][field] = e.target.value;
        setKv(newKv);
    }

    const add = () => setKv([...kv, initState]);

    const remove = (index, val = kv, setter = setKv) => () => {
        const newVal = val.slice(0);
        newVal.splice(index, 1);
        setter(newVal);
    }

    const permDelete = (key) => () => {
        dispatch(loading());
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: key })
        }

        fetch(ORG_DELETE, { method: 'POST', options })
            .then(res => {
                res.status === 200 ? remove(key, dbkv, setDbkv)() : console.log('error');
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(loading(false)));
    }

    const save = index => () => {
        dispatch(loading());
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kv[index])
        }

        fetch(ORG_INSERT, options)
            .then(res => {
                if (res.status === 200) {
                    console.log('success');
                    remove(index)();
                    setLoadAgian(loadAgain + 1);
                } else {
                    setterForError('Duplicate field or Empty field');
                }
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(loading(false)));

    }
    return (
        <Container maxWidth='md'>
            <Card
                style={{
                    padding: 20,
                    borderStyle: 'groove',
                    borderColor: COLOURS.primary.lighter,
                    borderWidth: 1
                }}
            >
                <OrgDetailsCard
                    values={dbkv}
                    deleteHandler={permDelete}
                />
                <MultiDualTextInput
                    values={kv}
                    add={add}
                    remove={remove}
                    save={save}
                    onChange={onChange}
                    error={error}
                />
            </Card>
        </Container>
    )
}
