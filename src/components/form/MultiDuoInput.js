import React from 'react';
import { Grid, Button, Card } from '@material-ui/core';
import SelectInput from './SelectInput';
import { Add, Remove } from '@material-ui/icons';


function MultiDuoInput(props) {
    return (
        <Grid item xs={12}>
            <Card
                style={{
                    padding: 10,
                    borderStyle: 'groove',
                    borderColor: '#000000',
                    borderWidth: 1
                }}
            >
                <Grid container direction='row' alignItems='center'>
                    {props.title} <Button onClick={props.add}><Add /></Button>
                </Grid>
                {props.value.map((value, key) => (
                    <Grid container direction='row' alignItems='center' key={key} spacing={1}>
                        <SelectInput xs={6}
                            label="Job Title"
                            onChange={(e) => props.onChange(e, key, 'job_title')}
                            selection={props.selection1}
                            value={value.job_title}
                        />
                        <SelectInput xs={5}
                            label="Access Level"
                            onChange={(e) => props.onChange(e, key, 'access_level')}
                            selection={props.selection2}
                            value={value.access_level}
                        />
                        <Grid item xs={1}>
                            <Button onClick={() => props.remove(key)}>
                                <Remove />
                            </Button>
                        </Grid >
                    </Grid>
                ))}
            </Card>
        </Grid>
    )
}

export default MultiDuoInput;
