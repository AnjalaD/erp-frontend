import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    outbox: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '40',
    }
}));

const RouterError = props => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.outbox}>{props.errorCode}</h1>
            <h4 className={classes.outbox}>{props.errorMessage}</h4>
        </div>
    );
}

export default RouterError;