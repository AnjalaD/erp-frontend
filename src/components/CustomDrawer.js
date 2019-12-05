import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Divider } from '@material-ui/core';

function CustomDrawer(props) {
    const createNavLink = (data) => (
        data.map((route, key) => (

            route === 'divider' ?
                <Divider />
                :
                <NavLink exact key={key}
                    to={route.path}
                >
                    <ListItem
                        style={{
                            paddingLeft: 20,
                        }}
                        button key={key}>
                        <ListItemIcon >{route.icon}</ListItemIcon>
                        <ListItemText primary={route.title} />
                    </ListItem>
                </NavLink>
        ))
    );

    return (
        <Drawer
            anchor='left'
            open={props.isOpen}
            onClose={() => props.onClose(!props.isOpen)}
            variant='persistent'
            PaperProps={{
                elevation: 2,
            }}
        >
            <List
                style={{
                    marginTop: 75,
                    width: '20vw',
                    minWidth: 240,
                }}
            >
                {createNavLink(props.routes)}
            </List>
        </Drawer>
    )
}

export default CustomDrawer
