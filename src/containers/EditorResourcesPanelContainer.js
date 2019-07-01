import {connect} from "react-redux";
import EditorResourcesPanel from "../components/EditorResourcesPanel";
import {setActiveResourceIndex, setActiveResourceTab} from "../actions/EditorActions";
import {withRouter} from "react-router-dom";
import {removeResource, setResourceField} from "../actions/ProjectActions";

const mapStateToProps = ( state, {match} ) => {

    const projectId = match.params.id;
    const item = state.projectResources[projectId][state.editor.activeResourceIndex];

    return ({
        activeResourceIndex: state.editor.activeResourceIndex,
        activeResourceTab: state.editor.activeResourceTab,
        resource: item && {...state.components[item.mcid], ...item},
        components: state.components,
    });
};

const mapDispatchToProps = (dispatch, {match}) => ({
    onClose: () => dispatch(setActiveResourceIndex(-1)),
    onSetActiveResourceTab: (index, tabIndex) => dispatch(setActiveResourceTab(tabIndex)),
    onDelete: (index) => dispatch(removeResource(match.params.id, { index })),
    onResourceUpdate: (index, key, value) => dispatch(setResourceField(match.params.id, {index, key, value})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorResourcesPanel));
