import io from 'socket.io-client';
import { tickerServerURL } from '../static/constants';

let socket = null;

export const getSocket = () => {
    return socket ? socket : (socket = io(tickerServerURL));
};

export const closeSocket = () => {
    socket.close();
    socket = null;
};
