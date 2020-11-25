import React from 'react';
import { Radar } from 'react-chartjs-2';
import './Widget2.css';

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
                        label: 'notes',
                        pointBackgroundColor: 'rgba(255,255,255,1)',
                        pointBorderColor: '##77cdd1',
                        borderColor: 'red',
                        color: 'red',
                        pointHoverBorderColor: 'rgba(255,255,255,1)',
                        data: [
                            14,
                            16,
                            13,
                            17,
                            19
                        ]
                        
                    },
                    
                   
                    
                ]
            },
           
        }
        
        
        
    }
    

    render() {
        
        return (
            <div className="chart">
                
                <Radar
                    
                    data={this.state.chartData}
                    options ={{
                        maintainAspectRatio: false,
                    
                    }}

                />
            </div>
        );
    }

}


export default Widget2;