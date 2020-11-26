import React from 'react';
import { Bar } from 'react-chartjs-2';


class Widget2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                
                labels:  [
                    
                    'Web',
                    'UX Design',
                    'Reseau',
                    'ioT',
                    'Bootcamp',
                ], 
                datasets: [
                    {
                        label: 'Notes',
                        data: [
                            11,
                            16,
                            14,
                            17,
                            19
                        ],
                        backgroundColor : [
                            " ",
                            "red",
                            "black",
                            "green",
                            "yellow",
                            
                        ]
                    
                        
                    }
                ]
            }          
        }
    }
    
    render() {
        return (
            <div className="chart">
                
                <Bar
                    data={this.state.chartData}
                    options ={{}}
                />
            </div>
        );
    }

}


export default Widget2;