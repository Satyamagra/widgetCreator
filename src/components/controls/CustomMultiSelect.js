import { MenuItem, TextField } from '@material-ui/core'
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {
    createStyles,
    alpha,
    Theme,
    ThemeProvider,
    createMuiTheme,
    withStyles,
    makeStyles,
    createTheme,
} from '@material-ui/core/styles'

import React from 'react'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: "red",
//     "& label.Mui-focused": {
//       color: "#8186AF",
//     },

//     // "& .MuiInput-underline:after": {
//     //   borderBottomColor: "#8186AF",
//     // },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#8186AF",
//       },
//       "&:hover fieldset": {
//         borderColor: "#8186AF",
//       },
//       // "&.Mui-focused fieldset": {
//       //   borderColor: "green",
//       // },
//     },
//   },
// }));

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#8186AF",
//     },
//   },
//   overrides: {
//     // Style sheet name
//     MuiFormLabel: {
//       // Name of the rule
//       root: {
//         // Some CSS
//         color: "whitesmoke",
//       },
//     },
//     MuiFormLabel: {
//       // Name of the rule
//       root: {
//         // Some CSS
//         color: "whitesmoke",
//       },
//     },
//     MuiInputBase: {
//       // Name of the rule
//       input: {
//         // Some CSS
//         color: "whitesmoke",
//       },
//     },
//   },
// });

export default function CustomMultiSelect(props) {
    // const classes = useStyles();
    const {
        name,
        label,
        type,
        error = null,
        defaultValue,
        value,
        onChange,
        endAdornment,
        options,
        optionType,
        ...other
    } = props
    return (
        // <ThemeProvider theme={theme}>
        <TextField
            // className={classes.root}
            variant="outlined"
            fullWidth
            color="primary"
            label={label}
            type={type || 'select'}
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            endAdornment={endAdornment}
            select
            // error
            // helperText="some validation error"
            {...(error && { error: true, helperText: error })}
            {...other}
        >
            <MenuItem key={""} value={""} disabled>
                No Selected
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option.id} value={option[optionType]}>
                    {option[optionType]}
                </MenuItem>
            ))}

        </TextField>
        // </ThemeProvider>
    )
}
