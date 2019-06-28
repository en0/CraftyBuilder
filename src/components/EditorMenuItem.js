import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Tooltip} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

export default function({text, toolTip, icon, onClick}) {
    return (
        <Tooltip title={toolTip} placement="right">
            <ListItem component={Button} onClick={() => onClick()}>
                <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        </Tooltip>
    );
}