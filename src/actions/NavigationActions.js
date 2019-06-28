export const NAVIGATE_TO = "NAVIGATION:NAVIGATE_TO";

export const navigateEditorTo = (key) => ({
    type: NAVIGATE_TO,
    payload: { key, group: "editor" }
});