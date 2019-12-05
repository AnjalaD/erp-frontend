import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <div>
                <AppBar title="Success" />
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions</p>
            </div>
        )
    }
}

export default Success;