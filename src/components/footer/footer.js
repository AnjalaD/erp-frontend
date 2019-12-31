import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { COLOURS } from '../../constants/constants';
import { faBuilding, faPhone, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        backgroundColor: COLOURS.primary.dark,
        colour: COLOURS.secondary.medium,
        paddingTop: theme.spacing(2)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: COLOURS.primary.darker,
        colour: COLOURS.secondary.medium,
        marginTop: theme.spacing(25),
        padding: `${theme.spacing(2)}px 0`,
    },
    text: {
        color: COLOURS.secondary.medium,
        paddingBottom: 10,
        paddingTop: 10
    },
    details: {
        paddingTop: 2,
        paddingLeft: 10,
        color: COLOURS.secondary.lighter
    },
    right: {
        padding: 20,
        color: COLOURS.secondary.medium,

    }
});

function Footer(props) {
    const { classes, data } = props;
    // console.log('data', data);

    const temp = data.filter(item =>
        item.key === 'Name' ||
        item.key === 'Reg No.' ||
        item.key === 'Address Line 1' ||
        item.key === 'Address Line 2' ||
        item.key === 'Address Line 3' ||
        item.key === 'Contact No.'
    );
    const details = {};
    temp.forEach(item => {
        details[item.key] = item.value;
    });

    return (
        <footer className={classes.footer}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h4" className={classes.text} component="h2" >
                    {details['Name']}
                </Typography>
                <Typography className={classes.details} component="p" >
                    <FontAwesomeIcon icon={faRegistered} />{details['Reg No.']}
                </Typography>
                <Typography component="p" className={classes.details}>
                    <FontAwesomeIcon icon={faBuilding} /> {details['Address Line 1']}
                </Typography>
                {
                    details['Address Line 2'] ?
                        <Typography component="p" className={classes.details}>
                            <FontAwesomeIcon icon={faBuilding} /> {details['Address Line 2']}
                        </Typography>
                        : null
                }
                {
                    details['Address Line 3'] ?
                        <Typography component="p" className={classes.details}>
                            <FontAwesomeIcon icon={faBuilding} /> {details['Address Line 3']}
                        </Typography>
                        : null
                }
                <Typography variant="h6" component="p" className={classes.details}>
                    <FontAwesomeIcon icon={faPhone} /> {details['Contact No.']}
                </Typography>
                <Typography variant="h6" className={classes.right} align="right" component="h5" >
                    <i>developed by</i>: <br /> <b>devSoft</b>
                </Typography>
            </Paper>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);