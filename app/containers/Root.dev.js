import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { TickerInfo } from '../containers';
import { PageNotFound } from '../components';
import DevTools from './DevTools';
import * as tickerService from '../services';

import { tickersList } from '../static/constants';

export default function Root({ store, history }) {
    tickerService.connectToSocket();

    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <div>
                        <div>
                            {tickersList.map((ticker) => (
                                <Link to={`/${ticker}`} key={ticker}>
                                    {ticker}
                                </Link>
                            ))}
                        </div>
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to={`/${tickersList[0]}`}
                                key="/"
                            />
                            {tickersList.map((ticker) => (
                                <Route
                                    exact
                                    path={`/${ticker}`}
                                    render={(props) => (
                                        <TickerInfo
                                            ticker={ticker}
                                            {...props}
                                        />
                                    )}
                                    key={ticker}
                                />
                            ))}
                            <Route path="*" key="*" component={PageNotFound} />
                        </Switch>
                    </div>
                </ConnectedRouter>
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
