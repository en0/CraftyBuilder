import EditorBodyView from "../layouts/EditorBodyView";
import {connect} from "react-redux";
const mapStateToProps = state => ({ selectedView: state.navigation.editorKey });
export default connect(mapStateToProps)(EditorBodyView);
