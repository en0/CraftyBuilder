export const ADD_NEW_RESOURCE = "PROJECT:ADD_NEW_RESOURCE";
export const SET_RESOURCE_FIELD = "PROJECT:SET_RESOURCE_FIELD";
export const REMOVE_RESOURCE = "PROJECT:REMOVE_RESOURCE";

export const addNewResource = (projectId, { mcid, quantity, notes }) => ({
    type: ADD_NEW_RESOURCE,
    payload: { projectId, resource: { mcid, quantity, notes } }
});

export const setResourceField = (projectId, {index, key, value}) => ({
    type: SET_RESOURCE_FIELD,
    payload: {projectId, index, key, value}
});

export const removeResource = (projectId, { index }) => ({
    type: REMOVE_RESOURCE,
    payload: { projectId, index }
});
