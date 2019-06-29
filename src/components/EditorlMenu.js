import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import EditorMenuItem from "./EditorMenuItem";

const useStyles = makeStyles(theme => ({
    drawer: {width: theme.drawerWidth, flexShrink: 0,},
    drawerPaper: {width: theme.drawerWidth, overflow: "hidden" },
}));

export default function ClippedDrawer({ items, activeView, onNavigationClick }) {

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}>
            <List>
                {items.map(m => <EditorMenuItem
                    selected={activeView === m.view}
                    key={m.view}
                    text={m.text}
                    toolTip={m.toolTip}
                    icon={m.icon}
                    onClick={() => onNavigationClick(m.view)} />)}
            </List>
        </Drawer>
    );
}