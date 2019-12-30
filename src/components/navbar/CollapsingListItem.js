import React from 'react'
import { useState } from 'react'
import List from '@material-ui/core/ListItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NestedListItem from './NestedListItem'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {  } from '@fortawesome/free-solid-svg-icons';

function CollapsingListItem(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const children = props.children;

    const childrenlist = children.map(child => (
        <NestedListItem task={child.task} icon={child.icon} nested={true} />
    ))
    return (
        <div>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                    <FontAwesomeIcon icon={props.icon} />
            </ListItemIcon>
            <ListItemText primary={props.task} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                    {/* <NestedListItem task="cat" icon={faEnvelope} nested={true} />
                    <NestedListItem task="dog" icon={faStar} nested={true} /> */}
                    {childrenlist}
            </List>
            </Collapse>
            </div>
    )
}

export default CollapsingListItem
