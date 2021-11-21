const Reducer = (state, action) => {
    switch (action.type) {
        case 'web3_connected':
            return {
                ...state,
                web3: action.payload,
            };
        case 'web3_caller_connected':
            return {
                ...state,
                web3_caller: action.payload,
            };
        case 'web3_disconnected':
            return {
                ...state,
                web3: null,
                account: "0x00",
                connected: false
            };
        case 'chainId':
            return {
                ...state,
                chainId: action.payload,
            };
        case 'set_account':
            return {
                ...state,
                account: action.payload
            };
        case 'set_connected':
            return {
                ...state,
                connected: action.payload
            };
        case 'conversation':
            return {
                ...state,
                connected: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;