import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Widget9 extends Component {

  /// Constructeur
  constructor(props) {
    super(props);

    /// this.state
    this.state = {
      options: {
      series: [23, 11, 54, 72, 12],
      labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"]
      },
    }


  }

  /// Render
  render() {
    return (
      <div className="donut">

        <Chart
          options={this.state.options}
          series={this.state.series}
          series= {[23, 11, 54, 72, 12]}
          labels= {["Apple", "Mango", "Banana", "Papaya", "Orange"]}
          type="donut"
          color='white'
          width="380"
        />

      </div>
    );
  }
}

export default Widget9;