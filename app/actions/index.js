import * as tickerService from '../services';

export const subscribeOnTicker = (ticker) => (dispatch) => {
    tickerService.subscribeOnTicker(ticker, (data) => {
        dispatch({ type: 'GET_TICKER_DATA', payload: data });
    });
};

export const unsubscribeFromTicker = (ticker) => (dispatch) => {
    tickerService.unsubscribeFromTicker(ticker);
    dispatch({ type: 'DISCONNECT_FROM_DATA_SOURCE' });
};
