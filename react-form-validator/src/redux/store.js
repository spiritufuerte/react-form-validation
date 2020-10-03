import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

const reducer = combineReducers({
    form: reduxFormReducer
});
const store = createStore(reducer);
window.store = store;

export default store;
