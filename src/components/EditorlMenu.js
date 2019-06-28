import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import EditorMenuItem from "./EditorMenuItem";
import EditorDetailsContainer from "../containers/EditorDetailsContainer";
import EditorCraftingContainer from "../containers/EditorCraftingContainer";
import EditorResourcesContainer from "../containers/EditorResourcesContainer";
import EditorMaterialsContainer from "../containers/EditorMaterialsContainer";

const drawerWidth = 55;

const useStyles = makeStyles(theme => ({
    root: { display: 'flex', },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
    },
}));

export default function ClippedDrawer({ items, selected, onNavigationClick }) {

    const classes = useStyles();

    const renderPage = (key) => {
        switch(key) {
            case "edit:details":
                return (<EditorDetailsContainer />);
            case "edit:resources":
                return (<EditorResourcesContainer />);
            case "edit:materials":
                return (<EditorMaterialsContainer />);
            case "edit:crafting":
                return (<EditorCraftingContainer />);
            default:
                return (<h2>{key}</h2>);
        }
    };

    return (
        <div className={classes.root}>
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
            <div className={classes.content}>{renderPage(selected)}</div>
        </div>
    );
}