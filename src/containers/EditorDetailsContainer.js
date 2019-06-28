import React from "react";
import EditorDetailsView from "../components/EditorDetails";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, {match}) => {
    const project = state.projects[match.params.id];
    return ({
        id: match.params.id,
        image: project.image,
        title: project.title,
        desc: project.desc,
        videoUrl: project.video && project.video.ref,
    });
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorDetailsView));
