import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TickerInfo extends Component {
    componentDidMount() {
        console.log('TickerInfo - componentDidMount');
        this.props.subscribeOnTicker();
    }

    componentDidUpdate() {
        console.log('TickerInfo - componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('TickerInfo - componentWillUnmount');
        this.props.unsubscribeFromTicker();
    }

    render() {
        return (
            <div>
                <div>TickerInfo</div>
                {console.log(this.props)}
            </div>
        );
    }
}

TickerInfo.propTypes = {
    subscribeOnTicker: PropTypes.func.isRequired,
    unsubscribeFromTicker: PropTypes.func.isRequired,
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
        unsubscribeFromTicker: () =>
            dispatch(actions.unsubscribeFromTicker(ticker)),
    };
};

export const ConnectedTickerInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TickerInfo);
