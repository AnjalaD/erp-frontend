import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function NestedListItem(props) {
    const classes = useStyles();
    return (
        <NavLink exact
            to={props.path}
        >
            {props.nested ?
                (
                    <ListItem button className={classes.nested}
                        style={{
                            width: '20vw',
                            minWidth: 240
                        }}
                    >
                        <ListItemIcon>
                            <FontAwesomeIcon icon={props.icon} />
                        </ListItemIcon>
                        <ListItemText primary={props.task} />
                    </ListItem>
                )
                :
                (
                    <Fragment>
                        <ListItem button
                            style={{
                                width: '20vw',
                                minWidth: 240,
                            }}
                        >
                            <ListItemIcon>
                                <FontAwesomeIcon icon={props.icon} />
                            </ListItemIcon>
                            <ListItemText primary={props.task} />

                        </ListItem>
                        <Divider />
                    </Fragment>
                )}
        </NavLink>
    )

}

export default NestedListItem
