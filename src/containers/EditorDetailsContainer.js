import React from "react";
import EditorDetails from "../components/EditorDetails";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, {match}) => {
    const project = state.projects[match.params.id];
    return ({
        id: match.params.id,
        image: project.image,
        title: project.title,
        desc: project.desc,
        videoUrl: project.videoRef,
    });
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorDetails));
