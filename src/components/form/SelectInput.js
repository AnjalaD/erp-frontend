import React ,{useState,useRef,useEffect} from 'react';
import { Grid, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     }
// }))

// const inputLabel = useRef(null);
// const [labelWidth, setLabelWidth] = useState(0);
// useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
// }, []);

function SelectInput(props) {
    // const classes = useStyles();
    return (
        // <FormControl variant="outlined" className={classes.formControl}>
        //     <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        //         Age
        // </InputLabel>
        //     <Select
        //         labelId="demo-simple-select-outlined-label"
        //         id="demo-simple-select-outlined"
        //         value={age}
        //         onChange={handleChange}
        //         labelWidth={labelWidth}
        //     >
        //         <MenuItem value="">
        //             <em>None</em>
        //         </MenuItem>
        //         <MenuItem value={10}>Ten</MenuItem>
        //         <MenuItem value={20}>Twenty</MenuItem>
        //         <MenuItem value={30}>Thirty</MenuItem>
        //     </Select>
        // </FormControl>
        <Grid item xs={props.xs || 6} style={{ marginTop: 16 }}>
            <FormControl variant='outlined' fullWidth={true} >
                <InputLabel >
                    {props.label}
                </InputLabel>
                <Select
                    disabled={props.disabled || false}
                    onChange={props.onChange}
                    value={props.value}
                    //labelWidth={labelWidth}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        props.selection.map((value, key) => (
                            <MenuItem key={key} value={value}>{value}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectInput;
