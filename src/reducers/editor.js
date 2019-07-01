import {
    SET_ACTIVE_RESOURCE_INDEX,
    SET_ACTIVE_RESOURCE_TAB_INDEX,
    SET_ACTIVE_VIEW,
    SET_RESOURCES_PAGE_INDEX
} from "../actions/EditorActions";
import {ADD_NEW_RESOURCE} from "../actions/ProjectActions";

const initialState = {
    activeView: "edit:resources",
    activeResourceIndex: 0,
    activeResourceTab: 0,
    itemsPerPage: 5,
    resourcesPageIndex: 0,
    materialsPageIndex: 0,
    menuItems: [
        { view:"edit:home", text: "Home", toolTip: "Return to project list", icon: "settings_backup_restore"},
        { view:"edit:details", text: "Details", toolTip: "Project Details", icon: "games" },
        { view:"edit:resources", text: "Resources", toolTip: "Project Resources", icon: "extensions"},
        { view:"edit:materials", text: "Materials", toolTip: "Raw Materials", icon: "list" },
        { view:"edit:crafting", text: "Crafting", toolTip: "Crafting Assistant", icon: "apps" },
    ],
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_VIEW:
            return { ...state, activeView: action.payload };
        case SET_ACTIVE_RESOURCE_INDEX:
            return { ...state, activeResourceIndex: action.payload };
        case SET_RESOURCES_PAGE_INDEX:
            return { ...state, resourcesPageIndex: action.payload };
        case SET_ACTIVE_RESOURCE_TAB_INDEX:
            return { ...state, activeResourceTab: action.payload };
        case ADD_NEW_RESOURCE:
            return { ...state, activeResourceIndex: 0, resourcesPageIndex: 0, activeResourceTab: 0 };
        default:
            return state;
    }
}
