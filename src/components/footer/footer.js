import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { faBuilding, faPhone, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryTheme } from '../settings/Colours'


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        // backgroundColor: COLOURS.primary.dark,
        backgroundColor: PrimaryTheme.shades.dark,
        colour: PrimaryTheme.shades.lighter,
        paddingTop: theme.spacing(2)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // backgroundColor: COLOURS.primary.darker,
        backgroundColor: PrimaryTheme.shades.darker,
        colour: PrimaryTheme.shades.lighter,
        padding: `${theme.spacing(2)}px 0`,
    },
    text: {
        color: '#ffffff',
        paddingBottom: 10,
        paddingTop: 10
    },
    details: {
        paddingTop: 2,
        paddingLeft: 10,
        color: '#ffffff'
    },
    right: {
        padding: 20,
        color: '#ffffff',

    }
});

function Footer(props) {
    const { classes, details } = props;
    // console.log('data', data);

    return (
        <footer className={classes.footer}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h4" className={classes.text} component="h2" >
                    {details['Name']}
                </Typography>
                <Typography className={classes.details} component="p" >
                    <FontAwesomeIcon icon={faRegistered} /> {details['Reg No.']}
                </Typography>
                <Typography component="p" className={classes.details}>
                    <FontAwesomeIcon icon={faBuilding} /> {details['Address Line 1']}
                </Typography>
                {
                    details['Address Line 2'] ?
                        <Typography component="p" className={classes.details} style={{ paddingLeft: 32 }}>
                            {details['Address Line 2']}
                        </Typography>
                        : null
                }
                {
                    details['Address Line 3'] ?
                        <Typography component="p" className={classes.details} style={{ paddingLeft: 32 }} >
                            {details['Address Line 3']}
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
        </footer >
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);