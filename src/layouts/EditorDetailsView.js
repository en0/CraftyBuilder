import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

const withStyle = makeStyles(theme => ({
    imageContainer: {
        position: "relative",
        overflow: "hidden",
        height: "200px",
        // borderBottom: "solid 1px black",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)",
        marginBottom: "15px",
        [theme.breakpoints.down('xs')]: {
            marginBottom: "5px",
            height: 100,
        },
    },
    image: {
        position: "absolute",
        top: "-100%",
        left: "0",
        right: "0",
        bottom: "-100%",
        margin: "auto",
        width: "100%"
    },
    titleOverlay: {
        position: "absolute",
        bottom: "0",
        left: 0,
        right: 0,
        paddingTop: 15,
        paddingLeft: "20px",
        paddingBottom: "20px",
        background: "rgba(0,0,0,0.5)"
    },
    titleUnder: {

    },
    changeImageIcon: {
        color: "white",
        position: "absolute",
        top: "0",
        right: "0",
        margin: "2px",
        "-webkit-text-fill-color": "white", /* Will override color (regardless of order) */
        "-webkit-text-stroke-width": "1px",
        "-webkit-text-stroke-color": "black",
    },
}));

export default function({image, title, desc, videoUrl}) {
    console.log(videoUrl)
    const classes = withStyle();
    return (
        <div>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={image} />
                <Hidden only="xs">
                    <div className={classes.titleOverlay}>
                        <Typography variant="h4" component="h4">{title}</Typography>
                        <Typography variant="h6" ><small>{desc}</small></Typography>
                    </div>
                </Hidden>
                <IconButton className={classes.changeImageIcon} aria-label="Add Photo">
                    <Icon>add_photo_alternate</Icon>
                </IconButton>
            </div>

            <Hidden smUp>
                <div className={classes.titleUnder}>
                    <Typography variant="h4" component="h4">{title}</Typography>
                    <Typography variant="body1" component="p" >{desc}</Typography>
                </div>
            </Hidden>

            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <iframe width="560" height="315" src={videoUrl} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </Grid>
            </Grid>
        </div>
    );
}