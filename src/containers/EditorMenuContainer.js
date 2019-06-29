import EditorMenu from "../components/EditorlMenu";
import {connect} from "react-redux";
import {setActiveView} from "../actions/EditorActions"
import {withRouter} from "react-router-dom";

const mapStateToProps = state => ({
    items: state.editor.menuItems,
    activeView: state.editor.activeView
});

const mapDispatchToProps = (dispatch, { history }) => ({
    onNavigationClick: (view) => {
        view === "edit:home"
            ? history.push("/")
            : dispatch(setActiveView(view));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorMenu));
