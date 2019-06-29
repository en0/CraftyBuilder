import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Tooltip} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

export default function({text, toolTip, icon, selected, onClick}) {
    return (
        <Tooltip title={toolTip} placement="right">
            <ListItem selected={selected}
                      component={Button} onClick={() => onClick()}>
                <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
            </ListItem>
        </Tooltip>
    );
    // <ListItemText primary={text}/>
}