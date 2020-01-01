import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { COLOURS } from '../../constants/constants'


function ActionBar(props) {
    console.log(props);
    return (
        <Grid item xs={12} style={{ margin: 5, padding: 10 }} align="right">
            {
                props.b1 ?
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.lighter, color: COLOURS.primary.darker }}
                        variant="contained"
                        onClick={props.b1}
                    >{props.label1 || 'Back'}</Button>
                    : null
            }

            {
                props.b2 ?
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                        variant="contained"
                        onClick={props.b2}
                    >{props.label2 || 'Continue'}</Button>
                    : null
            }
        </Grid>
    )
}

export default ActionBar
