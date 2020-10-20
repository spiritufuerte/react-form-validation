import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import authReducer from "./user-reducer";
import thunk from "redux-thunk";
import authErrorReducer from "./auth-reducer";

const reducer = combineReducers({
    form: reduxFormReducer,
    auth: authReducer,
    authError: authErrorReducer
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools || compose;

const store = createStore(reducer,composeEnchancers(applyMiddleware(thunk)));
window.store = store;

export default store;
