import { Avatar, Container, Typography, FormControlLabel, CssBaseline, TextField, Checkbox,makeStyles} from "@material-ui/core";
import React, { } from 'react';
import ProfileRow from './UserProfilerow';
import { COLOURS } from '../../constants/constants';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';

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

    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} >
                    A
                </Avatar>
                <Typography component="h1" variant="h5">
                    Anjala Dilhara
                </Typography>
                <ProfileRow name="dkvadvadkvalv" icon={faCoffee} />
                <ProfileRow name="feGG" icon={faHome} />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    
            </div>

        </Container>
    );
}

export default Profile;

