import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import NestedListItem from './NestedListItem'
import CollapsingListItem from './CollapsingListItem'
import { faEnvelope, faEnvelopeOpenText, faCalculator, faUserPlus, faUserCheck, faUserEdit, faUser, faPaperclip, faPager, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function NestedList() {
    const classes = useStyles();

    const employees = [
    {
        task: 'Add Employee',
        icon: faUserPlus
    }, {
        task: 'View Employees',
        icon: faUserCheck
    }, {
        task: 'Edit Employee',
        icon: faUserEdit
    }
    ]
    const supervisors = [
    {
        task: 'Requested Leaves',
        icon: faPaperclip
    },
    {
        task: 'Leaves History',
        icon: faPager
    },
    {
        task: 'My Employees',
        icon: faPeopleCarry
    },
];
    

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Level 3 demo
        </ListSubheader>
            }
            className={classes.root}
        >
            <NestedListItem task="Sent Mail" icon={faEnvelope} nested={false}/>
            <NestedListItem task="Drafts" icon={faEnvelopeOpenText} nested={false}/>
            <CollapsingListItem task="Employees" icon={faUser} children={employees} />
            <CollapsingListItem task="Supervising" icon={faUser} children={supervisors} />
        </List>
    );
}