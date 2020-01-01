import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { PrimaryTheme } from '../settings/Colours'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: PrimaryTheme.shades.dark,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginForm(props) {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {props.label || 'Sign in'}
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="on"
                        autoFocus
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        error={props.error !== null}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={props.error !== null}
                    />
                    <Typography color="error">
                        {props.error !== null ? '* ' + props.error : null}
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: PrimaryTheme.code}}
                        className={classes.submit}
                        onClick={e => {
                            e.preventDefault();
                            props.loginHandler({
                                username: username,
                                password: password
                            });
                        }}
                    >
                        Sign In
                    </Button>
                </form>
            </div>

        </Container>
    )
}

export default LoginForm
