import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Snackbar, Slide, Icon, SnackbarContent } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

const variantIcon = {
    success: <CheckCircleIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
};

const styles = {
    success: { backgroundColor: '#43a047' },
    error: { backgroundColor: '#d32f2f' },
    warning: { backgroundColor: '#ffa000' },
    info: { backgroundColor: '#90caf9' }
}

function NotificationBar(props) {
    const notification = useSelector(state => state.message)
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState(null);
    const [messages, setMessages] = useState(notification ? [notification] : []);

    const addNewMessage = () => {
        console.log('message received....', notification)
        if (notification) setMessages([...messages, notification]);
    }

    const displayMsg = () => {
        if (messages.length > 0) {
            console.log('display message...', messages)
            setMessages(prev => {
                setMsg(prev.shift());
                setOpen(true);
                return prev;
            });
        }
        return () => clearTimeout();

    }

    //add new notification to queue
    useEffect(addNewMessage, [notification]);

    //display notification
    useEffect(displayMsg, [messages]);


    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => setOpen(false)}
            TransitionComponent={(props) => <Slide {...props} direction='up' />}
        >
            <SnackbarContent
                style={msg ? styles[msg.type] : styles.info}
                message={
                    <span >
                        <Icon>{msg ? variantIcon[msg.type] : variantIcon.info}</Icon>
                        {msg ? msg.message : ''}
                    </span>
                }
            />
        </Snackbar>
    )
}

export default NotificationBar
