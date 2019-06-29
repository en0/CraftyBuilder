import EditorBodyView from "../layouts/EditorBodyView";
import {connect} from "react-redux";
const mapStateToProps = state => ({ selectedView: state.editor.activeView });
export default connect(mapStateToProps)(EditorBodyView);
