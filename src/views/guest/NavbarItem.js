import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    navbutton: {
        marginLeft: 10,
        marginRight:10
    }
}));

const NavbarItem = (props) => {
    const classes = useStyles();
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className={classes.navbutton} color = "dark" href={props.link}>{props.name}</NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavbarItem;

