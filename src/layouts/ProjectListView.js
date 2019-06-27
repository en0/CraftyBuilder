import VisibleProjectListContainer from "../containers/VisibleProjectListContainer";
import React from "react";
import ProjectListFilterContainer from "../containers/ProjectListFilterContainer";
import { Grid, Container } from "@material-ui/core";

export default function() {
    return (
        <Container maxWidth="lg">
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={12}><ProjectListFilterContainer /></Grid>
                <Grid item><VisibleProjectListContainer /></Grid>
            </Grid>
        </Container>
    );
};
