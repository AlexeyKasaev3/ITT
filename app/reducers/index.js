import { combineReducers } from 'redux';

const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TICKER_DATA':
            const payloadObject = JSON.parse(action.payload);
            let priceChangeDirection = 'NONE';
            if (state.change && payloadObject.change !== 0) {
                priceChangeDirection = priceChangeDirection =
                    state.price - payloadObject.price > 0 ? 'DOWN' : 'UP';
            }
            return { ...payloadObject, priceChangeDirection };
        case 'DISCONNECT_FROM_DATA_SOURCE':
            return {};
        default:
            return state;
    }
};

export default combineReducers({ stockTicker });
