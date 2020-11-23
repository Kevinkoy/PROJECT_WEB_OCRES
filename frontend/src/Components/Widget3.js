import React from 'react';
import ReactSpeedmoeter from 'react-d3-speedometer';


class Widget3 extends React.Component{

    render(){

        return(
           <div> 
            <h1 style={{ color: 'white' }}> Speedometer </h1>
            <ReactSpeedmoeter
            allowTransparency="true"
            maxValues={1000}
            currentValueText="Internet Speed"
            value={800}
            segments={5}
            segmentColors={[
                "#bf616a",
                "#d08770",
                "#ebcb8b",
                "#a3be8c",
                "#b48ead",
            ]}
            
            />
           </div>
        );
    }
}

export default Widget3;