import React, { Component } from 'react';
import { Row } from "react-grid-system";
import { NotificationContainer, NotificationManager } from "react-light-notifications";
import "./Widget11_main.css/main.css";
import axios from 'axios';

class Widget11 extends Component {
  /// Constructor
  constructor(props) {
    super(props);

    /// this.state.attributs
    this.state = {
      id: '',

      /// MAP POUR STOCKER 
      Collection: []
    }
    /// Binding 
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onClickInfo = this.onClickInfo.bind(this)
    this.onClickRecette = this.onClickRecette.bind(this)
    this.onClickPhrase = this.onClickPhrase.bind(this)
    this.onClickDevoir = this.onClickDevoir.bind(this)

  }

  /// METHODES ***********************************************
  /// ComponentDiDmount
  async componentDidMount() {
    try {
      await axios.get("http://localhost:5000/Notifications")
        .then(async reponse => {
          this.setState({
            Collection: reponse.data
          })
          console.log("Collection <Notifications>:", this.state.Collection)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      console.log(err);
    }
  }

  /// INFO
  onClickInfo() {
    var random = 0;
    do {
      random = Math.round(Math.random() * (this.state.Collection.length - 1) + 0);
    } while (this.state.Collection[random].category !== "Info");

    NotificationManager.info(
      {
        title: this.state.Collection[random].category,
        message: this.state.Collection[random].content,
      })
  }

  /// RECETTE
  onClickRecette() {
    var random = 0;
    do {
      random = Math.round(Math.random() * (this.state.Collection.length - 1) + 0);
    } while (this.state.Collection[random].category !== "Recette");

    NotificationManager.success(
      {
        title: this.state.Collection[random].category,
        message: this.state.Collection[random].content,
      })
  }

  /// PHRASE
  onClickPhrase() {
    var random = 0;
    do {
      random = Math.round(Math.random() * (this.state.Collection.length - 1) + 0);
    } while (this.state.Collection[random].category !== "Phrase");

    NotificationManager.error(
      {
        title: this.state.Collection[random].category,
        message: this.state.Collection[random].content,
      })
  }


  /// DEVOIR
  onClickDevoir() {
    var random = 0;
    do {
      random = Math.round(Math.random() * (this.state.Collection.length - 1) + 0);
    } while (this.state.Collection[random].category !== "Devoir");

    NotificationManager.warning(
      {
        title: this.state.Collection[random].category,
        message: this.state.Collection[random].content,
      })
  }

  /// RENDER ******************************************************************************************
  render() {
    const { Collection } = this.state;
    return (
      <div >
        <Row>

          {/* INFO BUTTON*/}
          <button
            style={{ marginLeft: "30px", color: '#fff', textTransform: "uppercase", textDecoration: 'none', backgroundColor: 'rgb(105,105,105)', borderRadius: '5px', display: 'inline-block', border: 'none', transition: "all 0.4 ease 0s", padding: '32px 26px', position: "relative" }}
            onClick={() => this.onClickInfo()}>
            Info
        </button>


          {/* RECETTE BUTTON*/}
          <button
            style={{ marginLeft: "40px", color: '#fff', textTransform: "uppercase", textDecoration: 'none', backgroundColor: 'rgb(105,105,105)', borderRadius: '5px', display: 'inline-block', border: 'none', transition: "all 0.4 ease 0s", padding: '32px 16px', position: "relative" }}
            onClick={() => this.onClickRecette()}>
            Recette
        </button>
        </Row>


        <br />

        {/* PHRASE BUTTON*/}
        <Row>
          <button
            style={{ marginLeft: "28px", color: '#fff', textTransform: "uppercase", textDecoration: 'none', backgroundColor: 'rgb(105,105,105)', borderRadius: '5px', display: 'inline-block', border: 'none', transition: "all 0.4 ease 0s", padding: '32px 15px', position: 'relative' }}
            onClick={() => this.onClickPhrase()}>
            Phrase
        </button>

          {/* DEVOIR BUTTON*/}

          <button
            style={{ marginLeft: "39px", color: '#fff', textTransform: "uppercase", textDecoration: 'none', backgroundColor: 'rgb(105,105,105)', borderRadius: '5px', display: 'inline-block', border: 'none', transition: "all 0.4 ease 0s", padding: '32px 22px', position: "relative" }}
            onClick={() => this.onClickDevoir()}>
            Devoir
        </button>
        </Row>
        <NotificationContainer />
      </div>

    );
  }


}


export default Widget11;