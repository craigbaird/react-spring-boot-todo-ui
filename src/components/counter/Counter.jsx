import React, { Component } from 'react';
import CounterButton from '../counter-button/CounterButton';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className="counter">
            <CounterButton incrementBy={1} decrementBy={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <CounterButton incrementBy={5} decrementBy={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <CounterButton incrementBy={10} decrementBy={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <span className="count">{this.state.counter}</span>
            <div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
          </div>
        );
    }

    reset() {
        this.setState({counter: 0});
    }

    increment(incrementBy) {   
        console.log('increment from child' + incrementBy); 
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + incrementBy}
            }
        );
    }

    decrement(decrementBy) {   
        console.log('decrement from child' + decrementBy); 
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - decrementBy}
            }
        );
    }
}

export default Counter;