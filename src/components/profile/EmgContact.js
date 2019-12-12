import { Container, Grid, Card } from "@material-ui/core";
import React, { } from 'react';
import ProfileRow from './UserProfilerow';
import { faUser, faPassport, faPhone } from '@fortawesome/free-solid-svg-icons';



const EmgContact = (props) => {
    const data = props.data;
    return (
        <Container maxWidth="sm">
            <Card>
                <Grid container>
                    <ProfileRow name='Name' icon={faUser} value={data.name} xs={6} />
                    <ProfileRow name='NIC' icon={faPassport} value={data.nic} xs={6} />
                    <ProfileRow name='Contact No.' icon={faPhone} value={data.contact_no} xs={12} />
                </Grid>
            </Card>

        </Container>
    );
}

export default EmgContact;

