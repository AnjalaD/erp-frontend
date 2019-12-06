import { Avatar, Container, Typography, CssBaseline, makeStyles, Grid } from "@material-ui/core";
import React, { } from 'react';
import ProfileRow from '../../views/guest/UserProfilerow';
import { COLOURS } from '../../constants/constants';
import { TEST_USER_DATA } from "../../testData";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
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
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Profile = (props) => {
    const data = props.data;
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
                <Grid container>
                    <ProfileRow name='First Name' value={data.first_name} xs={6} />
                    <ProfileRow name='First Name' value={data.last_name} xs={6} />
                    <ProfileRow name='NIC' value={data.nic} />
                    <ProfileRow
                        name="Address"
                        value={data.addr_house_no + (', ' + data.addr_line_1 || null) + (', ' + data.addr_line_2 || null)}
                    />
                    <ProfileRow name="City" value={data.addr_city} />
                    {
                        data.marital_state ?
                            <div>
                                <ProfileRow name='Date of Birth' value={data.dob} xs={6} />
                                <ProfileRow name='Marital State' value={data.marital_state} xs={6} />
                            </div>
                            :
                            <ProfileRow name='RelationShip' value={data.relationship} xs={12} />

                    }
                    <ProfileRow name='Department' value={data.dept_name} />
                    {Array.isArray(data.email) ? data.email.map((email, i) => (
                        <ProfileRow name={'Email-' + (i + 1)} value={email} key={i} />
                    ))
                        :
                        <ProfileRow name='Email' value={data.email} />}
                    {Array.isArray(data.contact_no) ?
                        data.contact_no.map((contact, i) => (
                            <ProfileRow name={'Contact No-' + (i + 1)} value={contact} xs={6} key={i} />
                        ))
                        :
                        <ProfileRow name='Contact No' value={data.contact_no} />
                    }
                    {data.custom_attributes ? data.custom_attributes.map(({ attribute, value }, i) => (
                        <ProfileRow name={attribute} value={value} key={i} />
                    )) : null
                    }
                </Grid>
            </div>

        </Container>
    );
}

export default Profile;

