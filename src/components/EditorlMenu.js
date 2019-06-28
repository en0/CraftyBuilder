import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import EditorMenuItem from "./EditorMenuItem";

const useStyles = makeStyles(theme => ({
    drawer: {width: theme.drawerWidth, flexShrink: 0,},
    drawerPaper: {width: theme.drawerWidth,},
}));

export default function ClippedDrawer({ items, selected, onNavigationClick }) {

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}>
            <List>
                {items.map(m => <EditorMenuItem
                    key={m.key}
                    text={m.text}
                    toolTip={m.toolTip}
                    icon={m.icon}
                    onClick={() => onNavigationClick(m.key)} />)}
            </List>
        </Drawer>
    );
}