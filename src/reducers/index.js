import { combineReducers } from "redux/es/redux";
import projects from "./projects";
import filters from "./filters";

export const craftyApp = combineReducers({
    projects,
    filters,
});