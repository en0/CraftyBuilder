export const SET_TEXT_FILTER = "setTextFilter";
export const setProjectListFilter = (text) => ({
    type: SET_TEXT_FILTER,
    payload: { key: "projectListFilter", text }
});