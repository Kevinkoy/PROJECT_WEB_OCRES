import React from 'react';

class Header extends React.Component {

  /// Methode Render
  render() {
    return (

      <div>
        {/* CONFIGURATIONS */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Register - Brand</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />
        <link rel="stylesheet" href="assets/css/smoothproducts.css" />

        {/* LA LIGNE SUPER IMPORTANTE POUR CSS BOOTSTRAP */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* CONFIGURATIONS */}

        {/* NAVBAR */}
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style={{background:"radial-gradient(circle, rgba(184,180,182,1) 0%, rgba(255,255,255,1) 48%, rgba(195,191,193,1) 100%)"}}>
          <div className="container"><a className="navbar-brand logo" href="/">MyDashBoard</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="Admin">Admin</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </div >



    );
  }

}

export default Header;