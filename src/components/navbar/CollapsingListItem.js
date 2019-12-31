import React, { Fragment } from 'react'
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
import { } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@material-ui/core';

function CollapsingListItem(props) {
    console.log(props);

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const childs = props.childs;

    const childrenlist = childs.map((child, key) => (
        <NestedListItem task={child.title} icon={child.icon} nested={true} path={child.path} key={key} />
    ));

    return (
        <Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <FontAwesomeIcon icon={props.icon} />
                </ListItemIcon>
                <ListItemText primary={props.task} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div"
                    style={{
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                    {childrenlist}
                </List>
            </Collapse>
            <Divider />
        </Fragment>
    )
}

export default CollapsingListItem
