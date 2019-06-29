import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fade} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    grow: { flexGrow: 1 },
    flex: { display: 'flex' },
    menuButton: { marginRight: theme.spacing(2) },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: { display: 'block' },
    },
    search: {
        flexGrow: 1,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: "100%",
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

export default function({onAddResource}) {
    console.log("HER ", onAddResource);

    const classes = useStyles();

    return (
        <div>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>Resources</Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}><SearchIcon /></div>
                    <InputBase classes={{ root: classes.inputRoot, input: classes.inputInput, }}
                       placeholder="Search..." inputProps={{ 'aria-label': 'Search' }} />
                </div>
                <div className={classes.flex}>
                    <IconButton aria-label="Add Resource" color="inherit" onClick={() => onAddResource()}>
                        <Icon>add_circle</Icon>
                    </IconButton>
                </div>
            </Toolbar>
        </div>
    )
}