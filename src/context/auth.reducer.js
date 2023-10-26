const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const token = action.payload?.token
            if (token) {
                localStorage.setItem('toke_mess', token);
            }
            return {
                ...state,
                user: action.payload,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                user: null
            }
        }
        default: {
            return {
                state
            }
        }
    }
};

export default authReducer;