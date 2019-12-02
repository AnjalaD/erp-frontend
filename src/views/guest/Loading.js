import React from 'react';
import Spinner from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    outbox: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <div className= {classes.outbox}>
            <Spinner/>
            <h1>LOADING.... </h1>
        </div>
    );
       
}