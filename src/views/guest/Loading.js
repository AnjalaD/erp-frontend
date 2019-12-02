import React from 'react';
import Spinner from '@material-ui/core/CircularProgress'

export default function Loading() {
    return (
        <div>
            <Spinner />
            <h1>LOADING .... </h1>
        </div>
    );
       
}