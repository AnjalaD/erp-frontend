import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { COLOURS, COMPANY_NAME } from '../../constants/constants';
import { makeStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
import { Button } from '@material-ui/core';
import CustomDrawer from './CustomDrawer';

const useStyles = makeStyles(theme => ({
    link: {
        backgroundColor: COLOURS.primary.light,
        textDecoration: 'none',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: COLOURS.primary.lighter,
        },
    },
}));

export default function AppNavbar(props) {
    const dispatch = useDispatch();

    const [isOpen, toggleNavbar] = useState(true);
    const classes = useStyles();

    const user = (
        <Nav>
            <Button><NavLink
                to='/error'
                style={{
                    color: '#ffffff',
                    textDecoration: 'none'
                }}
            >
                <Person />
                Profile
            </NavLink></Button>
            <Button
                className={classes.link}
                onClick={() => dispatch(logout())}
            >
                Logout
            </Button>
        </Nav>
    );

    const guest = null;

    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: COLOURS.primary.medium,
                    zIndex: 12001,
                    paddingLeft: '4vw',
                    paddingRight: '4vw',
                    height: 75
                }}
                dark
            >
                <div>
                    <NavbarToggler onClick={e => toggleNavbar(!isOpen)} />
                    <NavbarBrand style={{ marginLeft: '10px' }} href="/" className={classes.topic}>{COMPANY_NAME}</NavbarBrand>
                </div>
                {props.loggedIn ? user : guest}
            </Navbar>
            {
                props.loggedIn ?
                    <CustomDrawer routes={props.routes} isOpen={isOpen} onClose={toggleNavbar} /> : null
            }
        </div>
    );
}
