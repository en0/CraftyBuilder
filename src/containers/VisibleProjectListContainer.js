import React from "react";
import { withRouter } from "react-router-dom"
import {connect} from "react-redux";
import ProjectCardList from "../components/ProjectCardList";

const Lower = s => s.toLowerCase();
const ProjectsAsArray = p => Object.keys(p).map(id => ({ ...p[id], id }));
const CreateTitleFilter = arr => filterText => arr.filter(a => Lower(a.title).includes(Lower(filterText)));

const mapStateToProps = state => {
    const AllProjects = ProjectsAsArray(state.projects);
    const FilteredProjects = CreateTitleFilter(AllProjects);
    return { projects: FilteredProjects(state.filters.projectListFilter) };
};

const mapDispatchToProps = (dispatch, { history }) => ({
    onProjectSelect: (id) => history.push(`/detail/${id}`),
    onProjectRemove: (id) => console.log(id)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectCardList));

