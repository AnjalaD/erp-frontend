import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

export default function DateInput(props) {
    // The first commit of Material-UI

    return (
        <Grid item xs={props.xs || 6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        className="MuiInputBase-fullWidth MuiOutlinedInput-root"
                        disableToolbar
                        variant='inline'
                        format="MM/dd/yyyy"
                        margin="normal"
                        label={props.label}
                        value={props.value}
                        onChange={props.onChange}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </Grid>
    );
}
