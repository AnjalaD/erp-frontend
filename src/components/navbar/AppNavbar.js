import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { COLOURS, COMPANY_NAME, URL } from '../../constants/constants';
import { makeStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout, remove_user } from '../../redux/actions';
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

    const [isOpen, toggleNavbar] = useState(false);
    const classes = useStyles();

    const user = (
        <Nav>
            <Button>
                <NavLink
                    to='/userprofile'
                    style={{
                        color: '#ffffff',
                        textDecoration: 'none'
                    }}
                >
                    <Person />
                    Profile
            </NavLink>
            </Button>
            <Button
                className={classes.link}
                onClick={() => {
                    dispatch(logout());
                    dispatch(remove_user());
                    window.location.assign(URL);
                }}
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
                    backgroundColor: COLOURS.primary.dark,
                    zIndex: 1201,
                    paddingLeft: '4vw',
                    paddingRight: '2vw',
                    height: 80
                }}
                dark
            >
                <div>
                    <NavbarToggler onClick={e => toggleNavbar(!isOpen)} />
                    <NavbarBrand style={{ marginLeft: 20 }} href="/" className={classes.topic}>{COMPANY_NAME}</NavbarBrand>
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
