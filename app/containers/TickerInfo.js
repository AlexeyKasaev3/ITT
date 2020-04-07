import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TickerInfo as TickerInfoComponent } from '../components';

class TickerInfo extends Component {
    componentDidMount() {
        this.props.subscribeOnTicker();
    }

    componentWillUnmount() {
        this.props.unsubscribeFromTicker();
    }

    render() {
        return <TickerInfoComponent tickerData={this.props.stockTicker} />;
    }
}

TickerInfo.propTypes = {
    subscribeOnTicker: PropTypes.func.isRequired,
    unsubscribeFromTicker: PropTypes.func.isRequired,
    stockTicker: PropTypes.object.isRequired,
};

const mapStateToProps = (storeState, ownProps) => {
    return {
        stockTicker: storeState.stockTicker,
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch, { ticker }) => {
    return {
        subscribeOnTicker: () => dispatch(actions.subscribeOnTicker(ticker)),
        unsubscribeFromTicker: () => dispatch(actions.unsubscribeFromTicker()),
    };
};

export const ConnectedTickerInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TickerInfo);
