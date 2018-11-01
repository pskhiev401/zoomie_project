// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import dlReducer from "./ducks/dlReducer";
// // import regReducer from "./ducks/peopleReducer";
// import promiseMiddleware from "redux-promise-middleware";

// const combined = combineReducers({dlReducer});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = composeEnhancers(applyMiddleware(promiseMiddleware()));
// const store = createStore(combined, middleware);

// export default store;


import { createStore, compose } from "redux";
import dlReducer from "./dlReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(dlReducer, composeEnhancers());
