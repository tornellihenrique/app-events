const INITIAL_STATE = {
    userEmail: '',
    userLogged: false
};

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                userEmail: action.userEmail,
                userLogged: true
            };
        case 'LOG_OUT':
            return {
                ...state,
                userEmail: '',
                userLogged: false
            };
        default:
            return state;
    }
}

export default userReducer;