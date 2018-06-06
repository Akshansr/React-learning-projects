import React, { Component } from 'react';
import './App.css';
class Timer extends Component {
    componentDidMount(){

        this.timer = setInterval(this.ticker, 1000)
    }
    constructor(props) {
        super(props);
        this.state = { clock: 0 };
        this.ticker = this.ticker.bind(this);
        // this.componentu = this.componentu.bind(this);
    }


    ticker(){

        this.abc = this.setState({clock: new Date() - this.props.start})
        

    }
    render() {
        var clock = Math.round(this.state.clock / 1000)
        return (
            
            <div>
            <br/>
            <h1>You have been in this page since</h1>
            
            <br/> 
            <span>{clock}</span>
            </div>
            
        );
    }
}

export default Timer;