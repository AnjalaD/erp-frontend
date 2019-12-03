import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { COLOURS } from '../constants/constants'

const useStyles = makeStyles(theme => ({
    dropdown: {
        backgroundColor: COLOURS.primary.dark
    }
}));

const NavBardropdown = (props) => {
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown className={classes.dropdown} isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className={classes.dropdown} caret>
                Dropdown
        </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default NavBardropdown;