import React, { Component } from 'react';

export class TickerInfo extends Component {
    componentDidMount() {
        console.log('TickerInfo - componentDidMount');
    }

    componentDidUpdate() {
        console.log('TickerInfo - componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('TickerInfo - componentWillUnmount');
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
