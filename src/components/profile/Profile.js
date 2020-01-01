import { Container, Grid, Card } from "@material-ui/core";
import React from 'react';
import ProfileRow from './UserProfilerow';
import { faUser, faPassport, faHome, faCalendarAlt, faRing, faBaby, faBuilding, faCity, faAt, faPhone, faDotCircle, faPersonBooth } from '@fortawesome/free-solid-svg-icons';


const Profile = (props) => {
    const data = props.data;
    // console.log('data', data);
    return (
        <Container maxWidth="sm">
            <Card>
                <Grid container>
                    <ProfileRow name='First Name' icon={faUser} value={data.first_name} xs={6} />
                    <ProfileRow name='Last Name' icon={faUser} value={data.last_name} xs={6} />
                    <ProfileRow name='NIC' icon={faPassport} value={data.nic} />
                    <ProfileRow
                        name="Address"
                        icon={faHome}
                        value={
                            data.addr_house_no
                            + (data.addr_line1 ? ', ' + data.addr_line_1 : '')
                            + (data.addr_line_2 ? ', ' + data.addr_line_2 : '')
                        }
                    />
                    <ProfileRow name="City" icon={faCity} value={data.addr_city} />
                    {
                        typeof data.marital_status !== 'undefined' ?
                            <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                                <ProfileRow name='Date of Birth' icon={faCalendarAlt} value={data.dob.slice(0, 10)} xs={6} />
                                <ProfileRow name='Gender' icon={faPersonBooth} value={data.gender} xs={6} />
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
                            <ProfileRow name={'Email-' + (i + 1)} icon={faAt} value={email.email} key={i} />
                        ))
                            : data.email ?
                                <ProfileRow name='Email' icon={faAt} value={data.email} />
                                : null
                    }
                    {
                        Array.isArray(data.contact_no) ?
                            data.contact_no.map((contact, i) => (
                                <ProfileRow name={'Contact No-' + (i + 1)} icon={faPhone} value={contact.contact_no} xs={6} key={i} />
                            ))
                            : data.contact_no ?
                                <ProfileRow name='Contact No' icon={faPhone} value={data.contact_no} />
                                : null
                    }
                    {
                        data.custom ? data.custom.map(({ attribute, value }, i) => (
                            <ProfileRow name={attribute} icon={faDotCircle} value={value} key={i} />
                        )) : null
                    }
                </Grid>
            </Card>

        </Container>
    );
}

export default Profile;

