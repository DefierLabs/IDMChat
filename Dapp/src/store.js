import React, {createContext, useReducer} from "react";
import Reducer from './contexts/Reducer'


const initialState = {
    account: "0x00",
    connected: false,
    web3: null,
    web3_caller: null,
    conversation: {},
    chainId: 1,
    error: null,
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;