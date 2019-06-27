import React from "react";
import {makeStyles } from "@material-ui/core";

const styles = makeStyles({
    root: {
    }
});

export default function({match}) {
    const { id } = match.params;
    return (
        <div>
            project {id}
        </div>
    );
};
