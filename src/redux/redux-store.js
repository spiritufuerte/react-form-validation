import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import authReducer from "./user-reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    form: reduxFormReducer,
    auth: authReducer
});
const store = createStore(reducer, (applyMiddleware(thunk)));
window.store = store;

export default store;
