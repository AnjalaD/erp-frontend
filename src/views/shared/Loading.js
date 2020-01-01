import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme => ({
    outbox: {
        backgroundColor: '#000',
        opacity: '0.5',
        height: '100vh',
        width: '100wv',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:focus': {
            outline: 'none'
        }
    }


}));

export default function Loading() {
    const classes = useStyles();

    const isLoading = useSelector(state => state.loading);

    return (
        <Modal
            style={{
                transition: '1s'
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isLoading}
        >
            <div className={classes.outbox}>
                <CircularProgress />
                <h1>LOADING.... </h1>
            </div>
        </Modal>
    );

}