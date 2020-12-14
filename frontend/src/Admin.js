import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';

class Admin extends React.Component {
  /// Constructor

  /// bind(this)

  /// onChange

  /// onSubmit

  render() {

    return (
      <div>

        {/* APPEL DU HEADER (NAVBAR) */}
        <Header></Header>
        {/* APPEL DU HEADER (NAVBAR) */}


        {/* CONFIGURATIONS */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />
        <link rel="stylesheet" href="assets/css/smoothproducts.css" />
        {/* LA LIGNE SUPER IMPORTANTE POUR CSS BOOTSTRAP */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* CONFIGURATIONS */}


        {/* BODY */}
        <main className="page registration-page">
          <section className="clean-block clean-form dark">

            {/* CONTAINER */}
            <div className="container">

              {/* ROW 1 */}
              <div className="row">
                {/* FORM 1*/}

                <div className="col-sm-max col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                    <h1 className="text-center">Spending</h1>
                    </div><a className="btn btn-success btn-block" role="button" href="/spendings">Manage</a>  
                  </form>
                </div>
                {/* FORM 2*/}
                <div className="col-sm-max col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                    <h1 className="text-center">Notifications</h1>
                    </div><a className="btn btn-warning btn-block" role="button" href="/notifications">Manage</a>
                  </form>
                </div>

                {/* FORM 3 */}
                <div className="col-sm-max col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                    <h1 className="text-center">StickyNotes</h1>
                    </div><a className="btn btn-danger btn-block" role="button" href="/stickynotes">Manage</a>
                  </form>
                </div>
              </div>
            </div>
            {/* CONTAINER */}


          </section>
        </main>

        {/* FOOTER */}
        <Footer></Footer>
        {/* FOOTER */}

      </div>


    )
  }

}

export default Admin;
