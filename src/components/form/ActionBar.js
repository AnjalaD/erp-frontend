import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { COLOURS } from '../../constants/constants'


function ActionBar(props) {
    return (
        <Grid item xs={12} style={{ margin: 30, padding: 10 }} align="right">
            <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.lighter, color: COLOURS.primary.darker }}
                variant="contained"
                onClick={props.b1}
            >{props.lable1}</Button>

            <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                variant="contained"
                onClick={props.b2}
            >{props.lable2}</Button>
        </Grid>
    )
}

ActionBar.defaultProps = {
    lable1: 'Back',
    lable2: 'Continue'
}

export default ActionBar
