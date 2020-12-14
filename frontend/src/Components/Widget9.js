import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

class Widget9 extends Component {

  /// Constructeur
  constructor(props) {
    super(props);

    /// this.state
    this.state = {
      options: {
        series: [23, 11, 54, 72, 12],
        labels: ["Bars", "Restaurant", "Shopping", "Transport", "Games"]
      },

      /// TOTAL 
      sumBars: 0,
      sumRestaurant: 0,
      sumShopping: 0,
      sumTransport: 0,
      sumGames: 0,

      /// MAP POUR STOCKER 
      Collection: [
        {
          /// METTRE LES ACCOLADES ONCPAPK!!!
        }
      ]
    }

    /// Binding 
    this.componentDidMount = this.componentDidMount.bind(this)
    this.displayBars = this.displayBars.bind(this)
    this.displayRestaurant = this.displayRestaurant.bind(this)
    this.displayShopping = this.displayShopping.bind(this)
    this.displayTransport = this.displayTransport.bind(this)
    this.displayGames = this.displayGames.bind(this)

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
          this.displayBars();
          this.displayRestaurant();
          this.displayShopping();
          this.displayTransport();
          this.displayGames();
        })
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      console.log(err);
    }


  }

  /// BAR
  async displayBars() {

    for (var i = 0; i < this.state.Collection.length; i++) {
      if (this.state.Collection[i].category == "Bars") {
        await this.setState({
          sumBars: this.state.sumBars + this.state.Collection[i].spending
        })
      }
    }
  }

  /// RESTAURANT
  async displayRestaurant() {

    for (var i = 0; i < this.state.Collection.length; i++) {
      if (this.state.Collection[i].category == "Restaurant") {
        await this.setState({
          sumRestaurant: this.state.sumRestaurant + this.state.Collection[i].spending
        })
      }
    }
  }

  /// Shopping
  async displayShopping() {

    for (var i = 0; i < this.state.Collection.length; i++) {
      if (this.state.Collection[i].category == "Shopping") {
        await this.setState({
          sumShopping: this.state.sumShopping + this.state.Collection[i].spending
        })
      }
    }
  }

  /// Transport
  async displayTransport() {

    for (var i = 0; i < this.state.Collection.length; i++) {
      if (this.state.Collection[i].category == "Transport") {
        await this.setState({
          sumTransport: this.state.sumTransport + this.state.Collection[i].spending
        })
      }
    }
  }

  /// Games
  async displayGames() {

    for (var i = 0; i < this.state.Collection.length; i++) {
      if (this.state.Collection[i].category == "Games") {
        await this.setState({
          sumGames: this.state.sumGames + this.state.Collection[i].spending
        })
      }
    }
  }



  /// Render
  render() {
    return (
      <div className="donut">

        <Chart
          options={this.state.options}
          series={this.state.series}
          series={[
            this.state.sumBars, 
            this.state.sumRestaurant, 
            this.state.sumShopping, 
            this.state.sumTransport, 
            this.state.sumGames]}
          labels={[]}
          type="donut"
          color='white'
          width="380"
        />

      </div>
    );
  }
}

export default Widget9;