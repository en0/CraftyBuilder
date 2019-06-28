import { NAVIGATE_TO } from "../actions/NavigationActions";

const initialState = {
    editorKey: "edit:details",
    editor: [
        { key:"edit:home", text: "Home", toolTip: "Return to project list", icon: "settings_backup_restore"},
        { key:"edit:details", text: "Details", toolTip: "Project Details", icon: "games" },
        { key:"edit:resources", text: "Resources", toolTip: "Project Resources", icon: "extensions"},
        { key:"edit:materials", text: "Materials", toolTip: "Raw Materials", icon: "list" },
        { key:"edit:crafting", text: "Crafting", toolTip: "Crafting Assistant", icon: "apps" },
    ]
};

export default function (state = initialState, action) {
    switch(action.type) {
        case NAVIGATE_TO:
            return { ...state, [ `${action.payload.group}Key` ]: action.payload.key };
        default:
            return state;
    }
}
