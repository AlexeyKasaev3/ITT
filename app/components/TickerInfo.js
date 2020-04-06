import React from 'react';
import PropTypes from 'prop-types';

export const TickerInfo = ({ tickerData }) => {
    const {
        ticker,
        exchange,
        price,
        change,
        priceChangeDirection,
    } = tickerData;

    const isTickerDataExists = (tickerValue) => !!tickerValue.ticker;

    return (
        <div className="tickerInfoRoot">
            <div className="header">
                {isTickerDataExists(tickerData) ? (
                    <div>
                        {exchange} > <h1>{ticker}</h1>
                    </div>
                ) : (
                    'Loading'
                )}
            </div>
            {isTickerDataExists(tickerData) ? (
                <div className="tickerInfoBodyWrapper">
                    <div>
                        <h2>price</h2>
                        <div className="tickerInfoItemValue">{price}$</div>
                    </div>
                    <div className={`priceChangeItem ${priceChangeDirection}`}>
                        <h2>change</h2>
                        <div className="tickerInfoItemValue">
                            {priceChangeDirection === 'UP' ? '+' : ''}
                            {priceChangeDirection === 'DOWN' ? '-' : ''}
                            {change}$
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

TickerInfo.propTypes = {
    tickerData: PropTypes.object.isRequired,
};
