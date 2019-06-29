export const ADD_NEW_RESOURCE = "PROJECT:ADD_NEW_RESOURCE";

export const addNewResource = (projectId, { mcid, quantity, notes }) => ({
    type: ADD_NEW_RESOURCE,
    payload: { projectId, resource: { mcid, quantity, notes } }
});