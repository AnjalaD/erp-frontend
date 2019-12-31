import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function NestedListItem(props) {
    const classes = useStyles();
    return (<NavLink exact key={props.key}
        to={props.path}
    >
        {props.nested ?
            (
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={props.icon} />
                    </ListItemIcon>
                    <ListItemText primary={props.task} />
                </ListItem>
            )
            :
            (
                <ListItem button >
                    <ListItemIcon>
                        <FontAwesomeIcon icon={props.icon} />
                    </ListItemIcon>
                    <ListItemText primary={props.task} />
                </ListItem>
            )}
    </NavLink>)

}

export default NestedListItem
