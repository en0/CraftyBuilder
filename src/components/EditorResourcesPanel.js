import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Icon} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        position: "absolute",
        bottom: 0,
        right: 0,
        height: "50%",
        left: theme.drawerWidth,
    },

    surface: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2)
    },

    controls: { float: "right", }
}));

export default function({ resource, onClose, onDelete }) {

    if (!resource)
        return null;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.surface}>
                <div className={classes.controls}>
                    <Tooltip title="Close Panel">
                        <IconButton size="small" onClick={() => onClose()}>
                            <Icon fontSize="inherit">close</Icon>
                        </IconButton>
                    </Tooltip>
                </div>
                <Typography variant="h5" component="h3" gutterBottom>
                    {resource.name}
                </Typography>
                <Typography component="p">
                    This is where you can change details about what a piston is for this project.
                </Typography>
                <Button>
                    <Icon>delete</Icon>
                    Delete
                </Button>
            </Paper>
        </div>
    );
}