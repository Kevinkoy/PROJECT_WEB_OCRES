import React from 'react';
import { Line } from 'react-chartjs-2';


class Widget2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {

                labels: [

                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ],
                datasets: [
                    {
                        label: 'Total Spending',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: '#0078FF',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [
                            7,
                            10,
                            30,
                            5,
                            12,
                            80,
                            2
                        ],



                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">

                <Line
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        );
    }

}


export default Widget2;
