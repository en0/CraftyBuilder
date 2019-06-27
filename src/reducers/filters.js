import { SET_TEXT_FILTER } from "../actions/FilterActions"
const initialState = {
    projectListFilter: "",
    projectMaterialFilter: "",
    projectComponentFilter: "",
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_TEXT_FILTER:
            return { ...state, [ action.payload.key ]: action.payload.text };
        default:
            return initialState;
    }
}