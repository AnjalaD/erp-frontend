import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { COLOURS } from '../../constants/constants'

const useStyles = makeStyles(theme => ({
    dropdown: {
        backgroundColor: COLOURS.primary.dark
    }
}));

const NavBardropdown = ({tasks}) => {
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const taskList = tasks.map(task => (
        <DropdownItem>{task.name}</DropdownItem>
    ))

    return (
        <Dropdown className={classes.dropdown} isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className={classes.dropdown} caret>
                Dropdown
            </DropdownToggle>
            <DropdownMenu>
                {taskList}
            </DropdownMenu>
        </Dropdown>
    );
}

export default NavBardropdown;