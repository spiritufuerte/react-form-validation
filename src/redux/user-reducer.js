export const UPDATE_TOKENS = 'UPDATE-TOKENS';

const initialState = {
    access_token: localStorage.getItem('access_token'),
    refresh_token:  localStorage.getItem('refresh_token')
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TOKENS: {
            let stateCopy = {...state};
            stateCopy.access_token = action.access_token;
            stateCopy.refresh_token = action.refresh_token;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default authReducer;