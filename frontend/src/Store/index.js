import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import sessionReducer from "./session";
import stateReducer from "./state";
import cuisineReducer from "./cuisine";
import recipeReducer from "./recipe";
import dishReducer from "./dish";

const rootReducer = combineReducers({
    session: sessionReducer,
    states: stateReducer,
    cuisines: cuisineReducer,
    myRecipe: recipeReducer,
    myDishes: dishReducer
})

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
