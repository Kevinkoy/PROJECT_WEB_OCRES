
import React from 'react';
import nouvelle_ville from './script.js';

class Widget6 extends React.Component{
  
    render(){
        return(  
          <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Weather</title>
          <link href="style.css" rel="stylesheet" type="text/css" />
          {/* bootstrap */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          {/* Axios */}
          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
         
          <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 className="display-4"> Weather </h2>
            <p className="lead">
              Select your city
            </p>
          </div>
          <div className="container">
            <div className="input-group mb-5 offset-4 col-4">
              <input id="city-input" style={{width:1000}} type="text" className="form-control" placeholder="City"/>
              <div className="input-group-append">

                <button id="city-input-button" className="btn btn-success" type="submit" onClick={nouvelle_ville}>Actualise</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 shadow-sm offset-sm-1">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Today</h4>
                </div>
                <div className="card-body">
                  <h2 id="today-forecast-main" className="card-title">
                  </h2>
                  <div>
                    <p id="today-forecast-more-info" />
                    <div id="icon-weather-container" />
                    <h3 id="today-forecast-temp"> </h3>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        );


    }

}


export default Widget6;


