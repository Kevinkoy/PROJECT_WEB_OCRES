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
<<<<<<< HEAD
                ], 
                datasets: [
                    {
                        label: 'Notes',
=======
                ],
 
                
                datasets: [
                    {
                        label: 'notes',
                        pointBackgroundColor: 'rgba(255,255,255,1)',
                        pointBorderColor: '##77cdd1',
                        borderColor: 'red',
                        color: 'red',
                        pointHoverBorderColor: 'rgba(255,255,255,1)',
>>>>>>> master
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