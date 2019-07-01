import React from "react";
import EditorResourcesTable from "../components/EditorResourcesTable";
import {connect} from "react-redux";
import {setActiveResourceIndex, setResourcesPageIndex} from "../actions/EditorActions";
import {withRouter} from "react-router-dom";

const mapStateToProps = ( state, {match} ) => {
    const projectId = match.params.id;
    return ({
        resources: state.projectResources[projectId].map(r=>({...state.components[r.mcid], ...r})),
        selectedIndex: state.editor.activeResourceIndex,
        itemsPerPage: state.editor.itemsPerPage,
        currentPage: state.editor.resourcesPageIndex,
    });
};

const mapDispatchToProps = dispatch => ({
    onRowClick: (i) => dispatch(setActiveResourceIndex(i)),
    onPageChange: (i) => dispatch(setResourcesPageIndex(i)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorResourcesTable));
