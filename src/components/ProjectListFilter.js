import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
});

export default function({ filterText, onFilterTextChange }) {

    const classes = useStyles();

    // TODO: Debounce this
    const onChange = e => onFilterTextChange && onFilterTextChange(e.target.value);

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Filter Projects"
                inputProps={{'aria-label': 'Filter Projects'}}
                value={filterText}
                onChange={onChange}
            />
            <SearchIcon/>
        </Paper>
    );
}