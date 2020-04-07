import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { FetchIntervalSelector as FetchIntervalSelectorComponent } from '../components';

class FetchIntervalSelector extends Component {
    constructor() {
        super();
        this.options = {
            500: 'half a second',
            1000: 'one second',
            2000: 'two seconds',
        };
        this.state = {
            isOpen: false,
        };
    }

    handlePannelOpenState = () => this.setState({ isOpen: !this.state.isOpen });

    handleOptionSelection = (fetchInterval) => {
        this.props.changeFetchInterval(fetchInterval);
        setTimeout(this.handlePannelOpenState, 200);
    };

    render = () => (
        <FetchIntervalSelectorComponent
            options={this.options}
            optionChooseHandler={this.handleOptionSelection}
            currentOption={this.props.fetchInterval}
            isOpen={this.state.isOpen}
            openClosePanelHandler={this.handlePannelOpenState}
        />
    );
}

FetchIntervalSelector.propTypes = {
    fetchInterval: PropTypes.number.isRequired,
    changeFetchInterval: PropTypes.func.isRequired,
};

const mapStateToProps = (storeState) => {
    return {
        fetchInterval: storeState.fetchInterval,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFetchInterval: (fetchInterval) =>
            dispatch(actions.changeFetchInterval(fetchInterval)),
    };
};

export const ConnectedFetchIntervalSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchIntervalSelector);
