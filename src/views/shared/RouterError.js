import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';



const RouterError = props => {
    const PrimaryTheme = useSelector(state => state.colors);
    const useStyles = makeStyles(theme => ({
        outbox: {
            color: PrimaryTheme.shades.darker,
            marginTop: theme.spacing(25),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '40',
        }
    }));

    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.outbox}>{props.errorCode || 404}</h1>
            <h4 className={classes.outbox}>{props.errorMessage || 'You took a wrong turn'}</h4>
        </div>
    );
}

export default RouterError;