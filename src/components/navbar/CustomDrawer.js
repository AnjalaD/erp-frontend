import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Divider } from '@material-ui/core';
import NestedListItem from './NestedListItem'
import CollapsingListItem from './CollapsingListItem'
import { faPaperclip, faStickyNote, faUsers, faUserAlt, faScroll, faUserEdit, faFileAlt, faUserPlus, faUniversity, faDotCircle, faUserTie, faFileInvoiceDollar, faBars, faBuilding, faHome, faUserTag, faArrowsAltH, faPager, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';


function CustomDrawer(props) {
    const supervisors = [
        {
            task: 'Requested Leaves',
            icon: faPaperclip,
            path:'/requested-leaves'
        },
        {
            task: 'Leaves History',
            icon: faPager,
            path: '/leaves-history',
        },
        {
            task: 'My Employees',
            icon: faPeopleCarry,
            path: '/employees-under-supervisor',
        },
    ];

    const createNavLink = (data) => (
        data.map((route, key) => (

            // route === 'divider' ?
            //     <Divider key={key} />
            //     :
                !route.root ?
                    <CollapsingListItem task={route.title} icon={route.icon} childs={route.children} key={key} />
                    :
                    <NestedListItem task={route.title} icon={route.icon} key={key} path={route.path}/>
                
                // <NavLink exact key={key}
                //     to={route.path}
                // >
                //     <NestedListItem task={route.title} icon={route.icon}/>
                //     <CollapsingListItem task={route.title} icon={route.icon} children={supervisors} />
                //     <ListItem
                //     style={{
                //         paddingLeft: 20,
                //     }}
                //     button key={key}>
                //     <ListItemIcon >{route.icon}</ListItemIcon>
                //     <ListItemText primary={route.title} />
                // </ListItem>
                // </NavLink>
        ))
    );

    return (
        <Drawer
            anchor='left'
            open={props.isOpen}
            onClose={() => props.onClose(!props.isOpen)}
            variant="persistent"
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
