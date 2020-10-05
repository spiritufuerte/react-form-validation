const UPDATE_TOKENS = 'UPDATE-TOKENS';

const initialState = {
    access_token: '',
    refresh_token: ''
}

const userReducer = (state = initialState, action) => {
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

export const updateTokensActionCreator = ({access_token, refresh_token}) => ({
    type: UPDATE_TOKENS,
    payload: {access_token, refresh_token}
});

export const updateTokens = ({access_token, refresh_token}) => {
    return  (dispatch) => {
        dispatch(updateTokensActionCreator({access_token, refresh_token}));
    }
}

export default userReducer;