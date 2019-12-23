import { Container, Grid, Card } from "@material-ui/core";
import React from 'react';
import ProfileRow from './UserProfilerow';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';


const EmailContact = (props) => {
    return (
        <Container maxWidth="sm">
            <Card>
                <Grid container>
                    {
                        props.data.map((value, i) => (
                            <ProfileRow name={props.label + '-' + (i + 1)} icon={props.type === 'email' ? faAt : faPhone} value={value} key={i} />
                        ))
                    }
                </Grid>
            </Card>
        </Container>
    );
}

export default EmailContact;

