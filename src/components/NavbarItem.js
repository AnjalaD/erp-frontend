import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavItem,
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    navbutton: {
        marginLeft: 10,
        marginRight: 10
    }
}));

const NavbarItem = (props) => {
    const classes = useStyles();
    return (
        <Nav className="ml-auto" navbar>
            <NavItem className={classes.navbutton}>
                {props.children}
            </NavItem>
        </Nav>
    );
}

export default NavbarItem;

