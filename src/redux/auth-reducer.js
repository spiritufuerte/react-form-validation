export const AUTH_ERROR = 'AUTH-ERROR';

const initialState = {
    authError: null
}

const authErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ERROR: {
            let stateCopy = {...state};
            stateCopy.authError = action.authError;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default authErrorReducer;