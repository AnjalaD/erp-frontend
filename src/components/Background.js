import React from 'react'
import { Box, Card, CardMedia, Typography, Grid, CardActionArea } from '@material-ui/core'
import { Image } from '@material-ui/icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colours, PrimaryTheme } from './settings/Colours';
import logo from '../corporate-alumni001.jpg'; 

function Background() {
    return (
        <Box component="span" m={1}>
            <Grid container style={{ margin: 20, padding: 10, marginBottom:-10}}>
            <Card elevation={1} style={{ width: '45%', margin: 10, padding:10, paddingLeft:40}} xs={8} >
                <Typography component="h3" variant="h6" gutterBottom style={{color:PrimaryTheme.shades.dark}}><b>Welcome to Jupiter!!</b></Typography>
                <Typography component="h3" variant="h5"><b> Jupiter Employee Management System</b></Typography>
                <br />
                <Typography component="h3">Achive all of your administrative work throuth this system</Typography>
                <br/>
                    <Typography component="h5"><FontAwesomeIcon icon={faDotCircle} style={{ color: PrimaryTheme.code }} /> Manage Employee Accounts</Typography>
                <br />
                    <Typography component="h5"><FontAwesomeIcon icon={faDotCircle} style={{ color: PrimaryTheme.code }} /> Apply and Accept Leaves</Typography>
                <br />
                    <Typography component="h5"><FontAwesomeIcon icon={faDotCircle} style={{ color: PrimaryTheme.code }}/> Supervise your Employees</Typography>
                <br />
                    <Typography component="h5"><FontAwesomeIcon icon={faDotCircle} style={{ color: PrimaryTheme.code }}/> Store Employee Details</Typography>
            </Card>
            <Card elevation={1} style={{ width: '45%', margin: 10, padding: 10 }} xs={8}>
                    
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={logo}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                </Card>
               </Grid>
        </Box>
    )
}

export default Background
