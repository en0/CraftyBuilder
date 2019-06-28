import { combineReducers } from "redux/es/redux";
import projects from "./projects";
import filters from "./filters";
import navigation from "./navigation";

export const craftyApp = combineReducers({
    projects,
    filters,
    navigation
});