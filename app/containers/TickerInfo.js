import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TickerInfo extends Component {
    componentDidMount() {
        console.log('TickerInfo - componentDidMount');
        this.props.connectToDataSourse();
    }

    componentDidUpdate() {
        console.log('TickerInfo - componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('TickerInfo - componentWillUnmount');
        this.props.disconnectFromDataSource();
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
    connectToDataSourse: PropTypes.func.isRequired,
    disconnectFromDataSource: PropTypes.func.isRequired,
};

const mapStateToProps = (storeState, ownProps) => {
    return {
        storeState,
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch, { ticker }) => {
    return {
        connectToDataSourse: () => dispatch(actions.subscribeOnTicker(ticker)),
        disconnectFromDataSource: () =>
            dispatch(actions.unsubscribeFromTicker(ticker)),
    };
};

export const ConnectedTickerInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TickerInfo);
