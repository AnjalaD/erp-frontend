import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme => ({
    outbox: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function Loading() {
    const classes = useStyles();

    const isLoading = useSelector(state => state.loading.isLoading);

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isLoading}
        >
            <div className={classes.paper}>
                <div className={classes.outbox}>
                    <CircularProgress />
                    <h1>LOADING.... </h1>
                </div>
            </div>
        </Modal>
    );

}