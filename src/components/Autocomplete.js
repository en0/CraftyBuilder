import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    root: { width: "100%", },
    fullWidth: {width:"100%"}
}));

export default function IntegrationDownshift({selectedValue, onSelectedChange, suggestions = []}) {

    const classes = useStyles();
    const onChange = (e) => onSelectedChange(e.target.value);

    return (
        <Select
            className={classes.fullWidth}
            value={selectedValue}
            onChange={onChange}>
            {suggestions.map(a => (
                <MenuItem key={a.value || a.label || a} value={a.value || a.label || a}>{a.label || a}</MenuItem>
            ))}
        </Select>
    );
}