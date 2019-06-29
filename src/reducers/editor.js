import {SET_ACTIVE_RESOURCE_INDEX, SET_ACTIVE_VIEW} from "../actions/EditorActions";

const initialState = {
    activeView: "edit:details",
    activeResourceIndex: -1,
    menuItems: [
        { view:"edit:home", text: "Home", toolTip: "Return to project list", icon: "settings_backup_restore"},
        { view:"edit:details", text: "Details", toolTip: "Project Details", icon: "games" },
        { view:"edit:resources", text: "Resources", toolTip: "Project Resources", icon: "extensions"},
        { view:"edit:materials", text: "Materials", toolTip: "Raw Materials", icon: "list" },
        { view:"edit:crafting", text: "Crafting", toolTip: "Crafting Assistant", icon: "apps" },
    ]
};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_VIEW:
            return { ...state, activeView: action.payload };
        case SET_ACTIVE_RESOURCE_INDEX:
            return { ...state, activeResourceIndex: action.payload };
        default:
            return state;
    }
}
