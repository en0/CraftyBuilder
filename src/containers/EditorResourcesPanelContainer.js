import {connect} from "react-redux";
import EditorResourcesPanel from "../components/EditorResourcesPanel";
import {setActiveResourceIndex} from "../actions/EditorActions";
import {withRouter} from "react-router-dom";

const mapStateToProps = ( state, {match} ) => {

    const projectId = match.params.id;
    const item = state.projects[projectId].resources[state.editor.activeResourceIndex];

    return ({
        resource: item && {...state.components[item.mcid], ...item}
    });
};

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(setActiveResourceIndex(-1))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorResourcesPanel));
