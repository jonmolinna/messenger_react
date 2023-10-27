const messageReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_MESSAGE_START': {
            return {
                loading: true,
                message: null,
                errors: null,
            }
        }
        case 'GET_ALL_MESSAGE_SUCCESS': {
            return {
                loading: false,
                message: action.payload,
                errors: null,
            }
        }
        // -------------
        case 'GET_ALL_MESSAGE_FAILURE': {
            return {
                loading: false,
                message: null,
                errors: action.payload,
            }
        }
        case 'ADD_MESSAGE_START': {
            return {
                loading: true,
                message: null,
                errors: null,
            }
        }
        case 'ADD_MESSAGE_SUCCESS': {
            return {
                loading: false,
                message: action.payload,
                errors: null,
            }
        }
        // ------
        case 'ADD_MESSAGE_FAILURE': {
            return {
                loading: false,
                message: null,
                errors: action.payload,
            }
        }
        // ----
        case 'MESSAGE_LOGOUT': {
            return {
                loading: false,
                message: null,
                errors: null,
            }
        }
        default:
            return state
    }
};

export default messageReducer;