import ProjectListFilter from "../components/ProjectListFilter";
import {connect} from "react-redux";
import { setProjectListFilter } from "../actions/FilterActions";

const mapStateToProps = state => ({
    filterText: state.filters.projectListFilter
});

const mapDispatchToProps = dispatch => ({
    onFilterTextChange: (text) => dispatch(setProjectListFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListFilter);

