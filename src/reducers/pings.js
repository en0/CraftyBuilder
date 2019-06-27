import { SEND_PING } from "../actions/ping";

const initialState = {
    count: 0,
    lastPayload: null,
    history: []
};

export const pings = (state = initialState, action) => {

    switch (action.type) {

        case SEND_PING:
            return {
                count: state.count + 1,
                lastPayload: action.payload,
                history: [ action.payload, ...state.history ]
            };

        default:
            return state;
    }
};