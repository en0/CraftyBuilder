export const SET_ACTIVE_VIEW = "EDITOR:SET_ACTIVE_VIEW";
export const SET_ACTIVE_RESOURCE_INDEX = "EDITOR:SET_ACTIVE_RESOURCE_INDEX";
export const SET_RESOURCES_PAGE_INDEX = "EDITOR:SET_RESOURCES_PAGE_INDEX";
export const SET_ACTIVE_RESOURCE_TAB_INDEX = "EDITOR:SET_ACTIVE_RESOURCE_TAB_INDEX";

export const setActiveView = (view) => ({
    type: SET_ACTIVE_VIEW,
    payload: view
});

export const setActiveResourceIndex = (index) => ({
    type: SET_ACTIVE_RESOURCE_INDEX,
    payload: index,
});

export const setResourcesPageIndex = (index) => ({
    type: SET_RESOURCES_PAGE_INDEX,
    payload: index,
});

export const setActiveResourceTab = (tabIndex) => ({
    type: SET_ACTIVE_RESOURCE_TAB_INDEX,
    payload: tabIndex
});
