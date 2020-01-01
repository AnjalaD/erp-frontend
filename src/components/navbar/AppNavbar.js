import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import Person from '@material-ui/icons/Person';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, remove_user } from '../../redux/actions';
import { Button } from '@material-ui/core';
import CustomDrawer from './CustomDrawer';
import { useSelector } from 'react-redux';

export default function AppNavbar(props) {
    const PrimaryTheme = useSelector(state => state.colors);

    const linkStyle = {
        backgroundColor: PrimaryTheme.shades.light,
        textDecoration: 'none',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: PrimaryTheme.shades.lighter,
        },
    };

    const dispatch = useDispatch();
    const [isOpen, toggleNavbar] = useState(false);

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
                style={linkStyle}
                onClick={() => {
                    dispatch(logout());
                    dispatch(remove_user());
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
                    // backgroundColor: COLOURS.primary.dark,
                    backgroundColor: PrimaryTheme.shades.dark,
                    zIndex: 1201,
                    paddingLeft: '4vw',
                    paddingRight: '2vw',
                    height: 80
                }}
                dark
            >
                <div>
                    <NavbarToggler onClick={e => toggleNavbar(!isOpen)} />
                    <NavbarBrand style={{ marginLeft: 20 }} href="/" >{props.brand || 'ERP system'}</NavbarBrand>
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
