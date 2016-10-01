import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCounter} from '../actions/increment_counter';
import {decrementCounter} from '../actions/decrement_counter';
import * as popup from '../actions/popup/open_close_popup';
import {resetCounter} from '../actions/reset_counter';
import {bindActionCreators} from 'redux';

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>Counter:</h2>
                <span>{this.props.count}</span>
                <button onClick={ this.props.onIncrement }>+</button>
                <button onClick={ () => this.props.onDecrement(2) }>-</button>
                <button onClick={ () => this.props.onReset(0) }>Reset</button>
                <button onClick={ () => this.props.open_popup() }>open pop up</button>
                <button onClick={ () => this.props.close_popup() }>close pop up</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        onIncrement: incrementCounter,
        onDecrement: decrementCounter,
        onReset: resetCounter,
        close_popup: popup.close_popup,
        open_popup: popup.open_popup,

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Counter);