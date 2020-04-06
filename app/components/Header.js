import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = ({ tickers }) => (
    <header className="header">
        <nav>
            <ul>
                {tickers.map((ticker) => (
                    <li key={ticker}>
                        <NavLink to={`/${ticker}`} activeClassName="active">
                            {ticker}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    tickers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
