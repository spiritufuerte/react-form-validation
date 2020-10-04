import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import userReducer from "./user-reducer";

const reducer = combineReducers({
    form: reduxFormReducer,
    user: userReducer
});
const store = createStore(reducer);
window.store = store;

export default store;
