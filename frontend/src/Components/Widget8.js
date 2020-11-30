import React, { Component } from 'react';
//import './Widget8.css';

class Widget8 extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div class="clock"
                style={{
                    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                    color: 'white',
                    fontSize: '60px',
                    width: '250px',
                    height: '250px',
                    paddingTop: '75px', 
                    textAlign: 'center',
                }}>
                <div class="time" >{this.state.date.toLocaleTimeString()}</div>
            </div >
        )
    }
}
export default Widget8;
