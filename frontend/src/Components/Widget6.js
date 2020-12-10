
import React from 'react';
import nouvelle_ville from './script.js';

class Widget6 extends React.Component{
  
    render(){
        return(  
          <div>
          {/* bootstrap */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          
          <br></br>
          <div className="container">

          <div className="input-group-append">
          <input id="city-input" style={{width:500}}  type="text" className="form-control" placeholder="What's the weather?"/>
                <button id="city-input-button" style={{width:100}} className="btn btn-success" type="submit" onClick={nouvelle_ville}> Refresh </button>
              </div>
              <br></br>
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

      }export default Widget6;