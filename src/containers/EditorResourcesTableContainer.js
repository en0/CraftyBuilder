import React from "react";
import EditorResourcesTable from "../components/EditorResourcesTable";
import {connect} from "react-redux";
import {setActiveResourceIndex} from "../actions/EditorActions";
import {withRouter} from "react-router-dom";

const mapStateToProps = ( state, {match} ) => {
    const projectId = match.params.id;
    return ({
        items: state.projects[projectId].resources.map(r => ({ ...state.components[r.mcid], ...r})),
        selectedIndex: state.editor.activeResourceIndex,
    });
};

const mapDispatchToProps = dispatch => ({
    onRowClick: (i) => dispatch(setActiveResourceIndex(i)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorResourcesTable));
