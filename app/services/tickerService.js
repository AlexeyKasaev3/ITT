import io from 'socket.io-client';
import { tickerServerURL } from '../static/constants';

let socket = null;
export const subscribeOnTicker = (stockSymbol, executeOnSocketOn) => {
    socket = io(tickerServerURL);

    socket.on('connect', () => {
        socket.emit('ticker', stockSymbol);
    });

    socket.on(stockSymbol, (data) => {
        executeOnSocketOn(data);
    });
};

export const unsubscribeFromTicker = (stockSymbol) => {
    socket.close(stockSymbol);
};
