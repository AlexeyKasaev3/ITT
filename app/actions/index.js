import * as tickerService from '../services';

export const subscribeOnTicker = (ticker) => (dispatch) => {
    tickerService.subscribeOnTicker(ticker, (data) => {
        console.log('HERE2');
        dispatch({ type: 'CONNECT_TO_DATA_SOURSE', payload: data });
    });
};

export const unsubscribeFromTicker = (ticker) => (dispatch) => {
    tickerService.unsubscribeFromTicker(ticker, () => {
        dispatch({ type: 'DISCONNECT_FROM_DATA_SOURCE' });
    });
};
