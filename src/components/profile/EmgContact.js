import { Container, makeStyles, Grid, Card } from "@material-ui/core";
import React, { } from 'react';
import ProfileRow from './UserProfilerow';
import { COLOURS } from '../../constants/constants';
import { faUser, faPassport, faPhone } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: COLOURS.primary.dark,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    }
}));

const EmgContact = (props) => {
    const data = props.data;
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Card className={classes.paper}>
                <Grid container>
                    <ProfileRow name='Name' icon={faUser} value={data.name} xs={6} />
                    <ProfileRow name='NIC' icon={faPassport} value={data.nic} xs={6} />
                    <ProfileRow name='Contact No.' icon={faPhone} value={data.contact_no} />
                </Grid>
            </Card>

        </Container>
    );
}

export default EmgContact;

