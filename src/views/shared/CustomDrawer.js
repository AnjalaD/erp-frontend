import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Icon } from '@material-ui/core';

function CustomDrawer(props) {
    const [isOpen, setIsOpen] = useState(false);

    const createNavLink = (data) => (
        data.map((route, key) => (

            <NavLink exact key={key}
                to={route.path}
            >
                <ListItem button key={key}>
                    <ListItemIcon >{route.icon}</ListItemIcon>
                    <ListItemText primary={route.title} />
                </ListItem>
            </NavLink>
        ))
    );

    console.log(typeof props.routes[0].icon);


    return (
        <Drawer
            anchor='left'
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
        >
            <List>
                {createNavLink(props.routes)}
            </List>
        </Drawer>
    )
}

export default CustomDrawer
