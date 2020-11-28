import React, { Component } from 'react';
import './Widget8.css';

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
                    background:'#628cb3',
                    borderRadius: '50%',
                    width: '160px',
                    height: '160px',
                    textAlign:'center',
                    marginLeft:'120px',
                    marginTop:'30px'
                    
                    
                }}>
                <div class="time" >{this.state.date.toLocaleTimeString()}</div>
            </div >
        )
    }
}
export default Widget8;
