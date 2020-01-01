import React from 'react'
import Background from '../../components/Background';
import { useSelector } from 'react-redux';

function Welcome() {
    const brand = useSelector(state => state.orgDetails);
    return (
        <Background brand={brand} />
    )
}

export default Welcome
