import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Card } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Profile from '../../components/profile/Profile';

function Confirm(props) {
    const { user, emg, dep } = props;
    console.info(user);

    return (
        <Card>
            <Profile data={user} />

            <Button
                color="secondary"
                variant="contained"
            >Back</Button>

            <Button
                color="primary"
                variant="contained"
            >Confirm & Continue</Button>
        </Card>
    );
}

export default Confirm;