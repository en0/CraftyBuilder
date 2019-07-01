import {connect} from "react-redux";
import EditorResourcesToolbar from "../components/EditorResourcesToolbar";
import {addNewResource} from "../actions/ProjectActions";
import {withRouter} from "react-router-dom";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch, {match}) => ({
    onAddResource: () => dispatch(addNewResource(match.params.id, {mcid:"editor:new"}))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorResourcesToolbar));
