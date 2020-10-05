import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import userReducer from "./user-reducer";
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
    form: reduxFormReducer,
    user: userReducer
});
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
