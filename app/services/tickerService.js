import io from 'socket.io-client';
import { tickerServerURL } from '../static/constants';

let socket = null;

export const connectToSocket = () => {
    socket = io(tickerServerURL);

    socket.on('connect', () => {
        console.log('connected');
    });
};

export const subscribeOnTicker = (stockSymbol, executeOnSocketOn) => {
    socket.emit('ticker', stockSymbol);

    socket.on(stockSymbol, (data) => {
        console.log(data);
        executeOnSocketOn(data);
    });
};

export const unsubscribeFromTicker = (stockSymbol) => {
    console.log('OFF', stockSymbol);
    socket.off(stockSymbol);
};
