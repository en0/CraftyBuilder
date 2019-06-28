import React from "react";
import EditorMenuContainer from "../containers/EditorMenuContainer";
import EditorBodyContainer from "../containers/EditorBodyContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: { display: 'flex', },
    drawer: { width: theme.drawerWidth, flexShrink: 0, },
    drawerPaper: { width: theme.drawerWidth, },
    content: { flexGrow: 1, padding: theme.spacing(0), },
}));

export default function() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <EditorMenuContainer />
                <div className={classes.content}>
                    <EditorBodyContainer />
                </div>
            </div>
        </div>
    );
};
