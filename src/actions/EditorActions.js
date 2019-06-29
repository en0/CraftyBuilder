export const SET_ACTIVE_VIEW = "EDITOR:SET_ACTIVE_VIEW";
export const SET_ACTIVE_RESOURCE_INDEX = "EDITOR:SET_ACTIVE_RESOURCE_INDEX";

export const setActiveView = (view) => ({
    type: SET_ACTIVE_VIEW,
    payload: view
});

export const setActiveResourceIndex = (index) => ({
    type: SET_ACTIVE_RESOURCE_INDEX,
    payload: index,
});
