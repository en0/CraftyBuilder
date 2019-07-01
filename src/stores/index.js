import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk';
import { craftyApp } from "../reducers";

export const store = createStore(
    craftyApp,
    applyMiddleware(thunk, logger)
);

store.dispatch({type: "test"});