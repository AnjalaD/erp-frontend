import React from 'react'
import { Card, Grid } from '@material-ui/core'
import MultiTextInput from './MultiTextInput'
import ActionBar from './ActionBar'

function EmailContactForm({ value, setter, init, nextStep, prevStep }) {

    const onChange = (e, i) => {
        const newVal = [...value];
        newVal[i] = e.targer.value;
        setter(newVal);
    }

    const remove = (i) => {
        const newVal = [...value];
        newVal.splice(i, 1);
        setter(newVal);
    }

    const add = () => setter([...value, init])

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10, width: '100%' }}
        >
            <Grid container spacing={1} >
                <MultiTextInput
                    label='Email'
                    onChange={onChange}
                    value={value}
                    remove={remove}
                    add={add}
                />
                <ActionBar
                    b1={nextStep}
                    b2={prevStep}
                />
            </Grid >
        </Card>
    )
}

export default EmailContactForm
