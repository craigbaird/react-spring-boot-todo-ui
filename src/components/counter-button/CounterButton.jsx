import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../counter/Counter.css';

class CounterButton extends Component {

    constructor() {
        super();
    }

    render () {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.incrementBy)}>+{this.props.incrementBy}</button>
                <button onClick={() => this.props.decrementMethod(this.props.decrementBy)}>-{this.props.decrementBy}</button>
            </div>
        );
    }

}

CounterButton.defaultProps = {
    incrementBy: 1,
    decrementBy: 1
}
CounterButton.propTypes = {
    incrementBy: PropTypes.number,
    decrementBy: PropTypes.number
}

export default CounterButton;