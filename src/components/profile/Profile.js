import {Container,makeStyles, Grid } from "@material-ui/core";
import React from 'react';
import ProfileRow from './UserProfilerow';
import { faUser, faPassport, faHome, faCalendarAlt, faRing, faBaby, faBuilding, faCity, faAt, faPhone, faDotCircle } from '@fortawesome/free-solid-svg-icons';
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
    return (
        <Container maxWidth="sm" style={{ marginBottom: 32 }}>
            <Card>
                <Grid container>
                    <ProfileRow name='First Name' icon={faUser} value={data.first_name} xs={6} />
                    <ProfileRow name='Last Name' icon={faUser} value={data.last_name} xs={6} />
                    <ProfileRow name='NIC' icon={faPassport} value={data.nic} />
                    <ProfileRow
                        name="Address"
                        icon={faHome}
                        value={data.addr_house_no + (', ' + data.addr_line_1 || null) + (', ' + data.addr_line_2 || null)}
                    />
                    <ProfileRow name="City" icon={faCity} value={data.addr_city} />
                    {
                        data.marital_status ?
                            <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                                <ProfileRow name='Date of Birth' icon={faCalendarAlt} value={data.dob} xs={6} />
                                <ProfileRow name='Marital State' icon={faRing} value={data.marital_status} xs={6} />
                                <ProfileRow name='Department' icon={faBuilding} value={data.dept_name} />
                                <ProfileRow name='Job Title' icon={faBuilding} value={data.job_title} xs={6} />
                                <ProfileRow name='Pay Grade' icon={faBuilding} value={data.pay_grade} xs={6} />
                                <ProfileRow name='Employement Status' icon={faBuilding} value={data.employment_status} />
                            </div>
                            :
                            <ProfileRow name='RelationShip' icon={faBaby} value={data.relationship} xs={12} />

                    }
                    {
                        Array.isArray(data.email) ? data.email.map((email, i) => (
                            <ProfileRow name={'Email-' + (i + 1)} icon={faAt} value={email} key={i} />
                        ))
                            :
                            <ProfileRow name='Email' icon={faAt} value={data.email} />
                    }
                    {
                        Array.isArray(data.contact_no) ?
                            data.contact_no.map((contact, i) => (
                                <ProfileRow name={'Contact No-' + (i + 1)} icon={faPhone} value={contact} xs={6} key={i} />
                            ))
                            :
                            <ProfileRow name='Contact No' icon={faPhone} value={data.contact_no} />
                    }
                    {
                        data.custom_attributes ? data.custom_attributes.map(({ attribute, value }, i) => (
                            <ProfileRow name={attribute} icon={faDotCircle} value={value} key={i} />
                        )) : null
                    }
                </Grid>
            </Card>

        </Container>
    );
}

export default Profile;

