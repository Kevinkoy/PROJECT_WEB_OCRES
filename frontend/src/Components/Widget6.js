import React from 'react';



class Widget6 extends React.Component{

    
    constructor(props) {

        super(props);
        this.state = {date: new Date()};

    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){

        return(
            <div style={{color:"white"}}>

        <p>il est {this.state.date.toLocaleTimeString()}</p>

            </div>
        );


    }

}


export default Widget6;


