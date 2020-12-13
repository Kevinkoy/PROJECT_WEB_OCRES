import React, { Component } from 'react';
import axios from 'axios';


class Widget5 extends Component {

  /// Constructor
  constructor(props) {
    super(props);

    /// this.state.attributs
    this.state = {
      id: '',

      /// MAP POUR STOCKER 
      Collection: [
        {
          /// METTRE LES ACCOLADES ONCPAPK!!!
        }
      ]

    }
    /// Binding 
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onClickNext = this.onClickNext.bind(this)
  }


  /// METHODES ***********************************************
  /// ComponentDiDmount
  async componentDidMount() {
    try {
      await axios.get("http://localhost:5000/Stickynotes")
        .then(async reponse => {
          this.setState({
            Collection: reponse.data
          })
          console.log("Collection <Stickynotes>:", this.state.Collection)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      console.log(err);
    }
  }

  /// Next
  onClickNext()
  {

  }



  /// METHODE RENDER
  render() {
    const { Collection } = this.state;
    return (
      /// POST IT CSS ************************************************************
      <div className="postit"
        style={{
          backgroundColor: '#feff9c',
          width: '230px',
          height: '220px',
          position: 'relative',
          WebkitBoxShadow: '5px 5px 0px 0px #fff740, 10px 10px 0px 0px #feff9c, 15px 15px 0px 0px #7afcff, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, 23px 11px 27px 3px rgba(0,0,0,0)',
          boxShadow: '5px 5px 0px 0px #fff740, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #7afcff, 20px 20px 0px 0px #ff65a3, 25px 25px 0px 0px #ff7eb9, 23px 11px 27px 3px rgba(0,0,0,0)',
          onClick={onClickNext()}
        }}>

        {/* TITLE CSS ************************************************************ */}
        <div className="title"
          style={{
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            borderBottom: 'solid 0.4px rgba(0, 0, 0, 0.404)',
          }}>

          {/* TITLE CONTENT ************************************************************ */}
          <h3 placeholder="titre" style={{ color: 'black' }}> {Collection[0].title} </h3>
        </div>

        {/* NOTES CSS ************************************************************ */}
        <div className="contenu"
          style={{
            width: '100%',
            height: '80%',
            overflow: 'hidden',
          }}>

          {/* NOTES CONTENT ************************************************************ */}
          <p placeholder="contenu">
            {new Date(Collection[0].createdAt).toDateString()}
            <br/>
            {Collection[0].notes}

          </p>
        </div>

      </div>

    );
  }
};

export default Widget5;

