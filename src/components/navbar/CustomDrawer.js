import React from 'react';
import { Drawer, List } from '@material-ui/core';
import NestedListItem from './NestedListItem'
import CollapsingListItem from './CollapsingListItem'


function CustomDrawer(props) {

    const createNavLink = (data) => (
        data.map((route, key) => (
            !route.root ?
                <CollapsingListItem task={route.title} icon={route.icon} childs={route.children} key={key} />
                :
                <NestedListItem task={route.title} icon={route.icon} key={key} path={route.path} />
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
