import React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Icon} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        bottom: 0,
        right: 0,
        height: "325px",
        left: theme.drawerWidth,
    },
    surface: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
        paddingTop: "0",
    },
    controls: { float: "right", },
    fullWidth: { width: "100%" },
    textArea: {
        width: "100%",
        marginTop: 2
    }
}));

export default function({
    activeResourceIndex,
    activeResourceTab,
    resource,
    components,
    onClose,
    onDelete,
    onResourceUpdate,
    onSetActiveResourceTab,
}) {

    if (!resource)
        return null;

    const classes = useStyles();

    const updateResourceField = (key, value) =>
        onResourceUpdate(activeResourceIndex, key, value);

    const deleteComponent = () =>
        onDelete(activeResourceIndex);

    const setActiveResourceTab = (v) =>
        onSetActiveResourceTab(activeResourceIndex, v);

    const suggestions =
        Object.keys(components).map(k => ({ label: components[k].name, value: k }));

    const renderTab0 = () => (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Select value={resource.mcid}
                                onChange={e => updateResourceField("mcid", e.target.value)}
                                className={classes.fullWidth}>
                            {suggestions.map(a => (
                                <MenuItem key={a.value || a.label || a} value={a.value || a.label || a}>
                                    {a.label || a}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={resource.quantity}
                            className={classes.fullWidth}
                            type="number"
                            label="Quantity"
                            onChange={e => updateResourceField("quantity", e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={resource.itemsPerStack}
                            className={classes.fullWidth}
                            type="number"
                            label="Items Per Stack"
                            onChange={e => updateResourceField("itemsPerStack", e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={resource.itemsPerShulker}
                            className={classes.fullWidth}
                            type="number"
                            label="Items Per Shulker"
                            onChange={e => updateResourceField("itemsPerShulker", e.target.value)} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            className={classes.textArea}
                            rows={11}
                            margin="normal"
                            placeholder="Notes about how this component is used or crafted."
                            value={resource.notes || ""}
                            onChange={e => updateResourceField("notes", e.target.value)} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

    const renderTab1 = () => (
        <p>Custom crafting support comming soon!</p>
    )

    return (
        <div className={classes.root}>
            <Paper className={classes.surface}>

                <div className={classes.controls}>
                    <Tooltip title="Remove Component">
                        <IconButton size="medium" onClick={() => deleteComponent()}>
                            <Icon fontSize="inherit" color="secondary">delete</Icon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Close Panel">
                        <IconButton size="medium" onClick={() => onClose()}>
                            <Icon fontSize="inherit">close</Icon>
                        </IconButton>
                    </Tooltip>
                </div>

                <Tabs value={activeResourceTab} onChange={(l, v) => setActiveResourceTab(v)}>
                    <Tab label="Component" />
                    <Tab label="Crafting" />
                </Tabs>
                {activeResourceTab === 0 && renderTab0()}
                {activeResourceTab === 1 && renderTab1()}
            </Paper>
        </div>
    );
}