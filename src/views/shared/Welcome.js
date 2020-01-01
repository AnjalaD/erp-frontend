import React from 'react'
import { Container, Grid } from '@material-ui/core'

function Welcome() {
    return (
        <Container>
            <Grid container justify='center' alignItems='center'>
                <Grid item>
                    Welcome to ERP System
                </Grid>
            </Grid>
        </Container>
    )
}

export default Welcome
