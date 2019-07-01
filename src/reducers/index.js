import { combineReducers } from "redux/es/redux";
import projects from "./projects";
import projectResources from "./projectResources";
import filters from "./filters";
import editor from "./editor";
import components from "./components";

export const craftyApp = combineReducers({
    projects,
    projectResources,
    filters,
    editor,
    components,
});