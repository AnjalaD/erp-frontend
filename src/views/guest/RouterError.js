import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    outbox: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '20',
    }
}));

const RouterError = props => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.outbox}>ERROR</h1>
        </div>
    );
}

export default RouterError;