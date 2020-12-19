import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';


class Widget2 extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props);

        /// this.state
        this.state = {
                    /// TOTAL per day
                    sumMonday: 0,
                    sumTuesday: 0,
                    sumWednesday: 0,
                    sumThursday: 0,
                    sumFriday: 0,
                    sumSaturday: 0,
                    sumSunday: 0,
    
                    /// MAP POUR STOCKER 
                    Collection: [
                        {}
                    ],
            
            chartData: {

                labels: [

                    'Monday 07/12',
                    'Tuesday 08/12',
                    'Wednesday 09/12',
                    'Thursday 10/12',
                    'Friday 11/12',
                    'Saturday 12/12',
                    'Sunday 13/12'
                ],
                datasets: [
                    {
                        /*
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
                        */
                        data: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                    }
                ],
        
            }
        }
        /// Binding
        this.componentDidMount = this.componentDidMount.bind(this)
        this.displayMonday = this.displayMonday.bind(this)
        this.displayTuesday = this.displayTuesday.bind(this)
        this.displayWednesday = this.displayWednesday.bind(this)
        this.displayThursday = this.displayThursday.bind(this)
        this.displayFriday = this.displayFriday.bind(this)
        this.displaySaturday = this.displaySaturday.bind(this)
        this.displaySunday = this.displaySunday.bind(this)

    }


    /// METHODES ---------- ComponentDiDmount
    async componentDidMount() {
        try {
            await axios.get("http://localhost:5000/spendings")
                .then(async reponse => {
                    this.setState({
                        Collection: reponse.data
                    })
                    console.log("Collection <Spendings>:", this.state.Collection)
                    this.displayMonday();
                    this.displayTuesday();
                    this.displayWednesday();
                    this.displayThursday();
                    this.displayFriday();
                    this.displaySaturday();
                    this.displaySunday();

                })
                .catch(err => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err);
        }
    }

    /// TotalMonday 1
    async displayMonday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            //console.log(new Date(this.state.Collection[i].date).getDay());
            if (new Date(this.state.Collection[i].date).getDay() === 1) {

                await this.setState({
                    sumMonday: this.state.sumMonday + this.state.Collection[i].spending
                    
                })
                //console.log(this.state.Collection[i].spending)
                //console.log(this.state.sumMonday)
            }
        }
    }

    /// TotalTuesday 2
    async displayTuesday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            if (new Date(this.state.Collection[i].date).getDay() === 2) {
                await this.setState({
                    sumTuesday: this.state.sumTuesday + this.state.Collection[i].spending
                })
            }
        }
    }

    /// TotalWednesday 3
    async displayWednesday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            if (new Date(this.state.Collection[i].date).getDay() === 3) {
                await this.setState({
                    sumWednesday: this.state.sumWednesday + this.state.Collection[i].spending
                })
            }
        }
    }

    /// TotalThursday 4
    async displayThursday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            if (new Date(this.state.Collection[i].date).getDay() === 4) {
                await this.setState({
                    sumThursday: this.state.sumThursday + this.state.Collection[i].spending
                })
            }
        }
    }

    /// TotalFriday 5
    async displayFriday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            if (new Date(this.state.Collection[i].date).getDay() === 5) {
                await this.setState({
                    sumFriday: this.state.sumFriday + this.state.Collection[i].spending
                })
            }
        }
    }

    /// TotalSaturday 6
    async displaySaturday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            if (new Date(this.state.Collection[i].date).getDay() === 6) {
                await this.setState({
                    sumSaturday: this.state.sumSaturday + this.state.Collection[i].spending
                })
            }
        }
    }

    /// TotalSunday 0
    async displaySunday() {

        for (var i = 0; i < this.state.Collection.length; i++) {
            if (new Date(this.state.Collection[i].date).getDay() === 0) {
                await this.setState({
                    sumSunday: this.state.sumSunday + this.state.Collection[i].spending
                })
            }
        }
    }



    render() {
        return (
            <div className="chart">

                <Line
                    options={this.state.options}
                    data={{
                        labels: [

                            'Monday 07/12',
                            'Tuesday 08/12',
                            'Wednesday 09/12',
                            'Thursday 10/12',
                            'Friday 11/12',
                            'Saturday 12/12',
                            'Sunday 13/12'
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
                                    this.state.sumMonday,
                                    this.state.sumTuesday,
                                    this.state.sumWednesday,
                                    this.state.sumThursday,
                                    this.state.sumFriday,
                                    this.state.sumSaturday,
                                    this.state.sumSunday
                                ],
        
        
        
                            }
                        ]
                    }}
                />
            </div>
        );
    }

}


export default Widget2;
