const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case 'CONNECT_TO_DATA_SOURSE':
            return JSON.parse(action.payload);
        case 'DISCONNECT_FROM_DATA_SOURCE':
            return {};
        default:
            return state;
    }
};

export default stockTicker;
