import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { COLOURS, DETAILS } from '../../constants/constants';
import { faBuilding,faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        backgroundColor: COLOURS.primary.dark,
        colour: COLOURS.secondary.medium,
        paddingTop: theme.spacing.unit * 2
    },
    footer: {
        backgroundColor: COLOURS.primary.darker,
        colour: COLOURS.secondary.medium,
        marginTop: theme.spacing.unit * 25,
        padding: `${theme.spacing.unit * 2}px 0`,
    },
    text: {
        color: COLOURS.secondary.medium,
        paddingBottom: 10,
        paddingTop: 10
    },
    details: {
        paddingTop: 2,
        paddingLeft:10,
        color:COLOURS.secondary.lighter
    },
    right: {
        padding: 20,
        color: COLOURS.secondary.medium,

    }
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer className={classes.footer}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h4" className={classes.text} component="h2" >
                    {DETAILS.name}
        </Typography>
                <Typography component="p" className={classes.details}>
                    <FontAwesomeIcon icon={faBuilding} /> {DETAILS.address}<br/>{DETAILS.city}
                </Typography>
                <Typography variant="h6" component="p" className={classes.details}>
                    <FontAwesomeIcon icon={faPhone} /> {DETAILS.contact}
                </Typography>
                <Typography variant="h6" className={classes.right} align="right" component="h5" >
                    <i>developed by</i>: <br/> <b>devSoft</b>
                </Typography>
            </Paper>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);