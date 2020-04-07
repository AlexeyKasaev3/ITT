import * as tickerService from '../services';

export const subscribeOnTicker = (ticker) => (dispatch, getState) => {
    tickerService.getSocket().on('connect', () => {
        tickerService
            .getSocket()
            .emit('ticker', ticker, getState().fetchInterval);
    });

    tickerService.getSocket().on(ticker, (data) => {
        dispatch({ type: 'GET_TICKER_DATA', payload: data });
    });
};

export const unsubscribeFromTicker = () => (dispatch) => {
    tickerService.closeSocket();
    dispatch({ type: 'DISCONNECT_FROM_DATA_SOURCE' });
};

export const changeFetchInterval = (fetchInterval) => (dispatch, getState) => {
    dispatch({ type: 'CHANGE_FETCH_INTERVAL', payload: fetchInterval });
    tickerService
        .getSocket()
        .emit('fetch interval change', getState().fetchInterval);
};
