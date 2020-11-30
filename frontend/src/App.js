import React from 'react';
import './App.css';
/// Grid = Gérer le display
import { Container, Row, Col } from 'react-grid-system';

/// Components
import Header from './Components/Header';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';
//import Widget6 from './Components/Widget6';
//import Widget7 from './Components/Widget7';
import Widget8 from './Components/Widget8';
import Widget9 from './Components/Widget9';
import Widget11 from './Components/Widget11';
import Widget6 from './Components/Widget6';
import Footer from './Components/Footer';

/// Routes

class App extends React.Component {

  render() {
    return (
      <div>
        {/* CONFIGURATIONS */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Home - Brand</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />
        <link rel="stylesheet" href="assets/css/smoothproducts.css" />
        {/* LA LIGNE SUPER IMPORTANTE POUR CSS BOOTSTRAP */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* CONFIGURATIONS */}

        {/* Header (+navbar) */}
        <Header />
        {/* Header (+navbar) */}

        {/* MAIN */}

        <main className="page landing-page">
          <section className="clean-block about-us">

            {/* CONTAINER*/}
            <div className="container">

              {/* FIRST ROW 1 */}
              <div className="row justify-content-center">

                <div className="col-sm-6 col-lg-8">
                  <div className="card clean-card text-center">
                    <Widget2 /> {/* GRAPH1 */}
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="card clean-card text-center" style={{background:"transparent", border:"transparent"}}>
                    <Widget1 /> {/* CALENDAR */}
                  </div>
                </div>

              </div>
              {/* FIRST ROW 1 */}

              <br></br>

              {/* SECOND ROW */}
              <div className="row justify-content-center">

                <div className="col-sm-6 col-lg-6">
                  <div className="card clean-card text-center">
                    <Widget9 /> {/* GRAPH2 */}
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card clean-card text-center" >
                    <Widget11/> {/* NOTIFICATIONS */}
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="card clean-card text-center">
                    <Widget8 /> {/* CLOCK */}
                  </div>
                </div>

              </div>
              {/* SECOND ROW */}

              <br></br>

              {/* THIRD ROW */}
              <div className="row justify-content-center">



                <div className="col-sm-6 col-lg-3">
                  <div className="card clean-card center" style={{background:"transparent", border:"transparent"}}>
                    <Widget4 /> {/* DEEZER */}
                  </div>
                </div>



                <div className="col-sm-6 col-lg-4">
                  <div className="card clean-card text-center">
                    <Widget6 /> {/* WEATHER */}
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="card clean-card text-center" style={{background:"transparent", border:"transparent"}}>
                    <Widget5 /> {/* POST-IT */}
                  </div>
                </div>

              </div>
              {/* THIRD ROW */}

            </div>
            {/* CONTAINER*/}
          </section>

        </main>
        {/* MAIN */}

        {/* Footer*/}
        <Footer />
        {/* Footer */}
      </div>
    )
  }

}

export default App;
