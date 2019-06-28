import EditorMenu from "../components/EditorlMenu";
import {connect} from "react-redux";
import {navigateEditorTo} from "../actions/NavigationActions"
import {withRouter} from "react-router-dom";

const mapStateToProps = state => ({
    items: state.navigation.editor,
    selected: state.navigation.editorKey
});

const mapDispatchToProps = (dispatch, { history }) => ({
    onNavigationClick: (key) => {
        key === "edit:home"
            ? history.push("/")
            : dispatch(navigateEditorTo(key));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorMenu));
