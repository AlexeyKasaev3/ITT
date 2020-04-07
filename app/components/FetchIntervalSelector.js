import React from 'react';
import PropTypes from 'prop-types';

export const FetchIntervalSelector = ({
    options,
    currentOption,
    optionChooseHandler,
    openClosePanelHandler,
    isOpen,
}) => {
    return (
        <div className="fetchIntervalSelector">
            <div
                className="fetchIntervalSelector__title"
                onClick={() => openClosePanelHandler()}
            >
                change price update interval
            </div>
            <ul
                className={`fetchIntervalSelector__panel ${
                    isOpen ? 'open' : ''
                }`}
            >
                {Object.keys(options).map((key) => {
                    return (
                        <li
                            onClick={() => optionChooseHandler(Number(key))}
                            key={key}
                            className={
                                currentOption === Number(key) ? 'active' : null
                            }
                        >
                            {options[key]}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

FetchIntervalSelector.propTypes = {
    options: PropTypes.object.isRequired,
    currentOption: PropTypes.number.isRequired,
    optionChooseHandler: PropTypes.func.isRequired,
    openClosePanelHandler: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
