import { createContext, useContext, useReducer } from 'react';
import messageReducer from './message.reducer';

const MessageStateContext = createContext();
const MessageDispatchContext = createContext();

const initialState = {
    loading: false,
    message: null,
    errors: null,
};

export const MessageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    return (
        <MessageDispatchContext.Provider value={dispatch}>
            <MessageStateContext.Provider value={state}>
                {children}
            </MessageStateContext.Provider>
        </MessageDispatchContext.Provider>
    )
};

export const useMessageState = () => useContext(MessageStateContext);
export const useMessageDispatch = () => useContext(MessageDispatchContext);