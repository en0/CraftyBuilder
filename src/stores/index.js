import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger'
import { craftyApp } from "../reducers";

export const store = createStore(
    craftyApp,
    applyMiddleware(logger)
);

store.dispatch({type: "test"});