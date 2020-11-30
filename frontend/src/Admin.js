import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';

class Admin extends React.Component {

  render() {

    return (
      <div>

        {/* APPEL DU HEADER (NAVBAR) */}
        <Header></Header>
        {/* APPEL DU HEADER (NAVBAR) */}

        <div>
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
                  <div className="col">
                    <form>
                      <div className="form-group">
                        <h1>Spending</h1>
                      </div>
                      <div className="form-group"><label htmlFor="name">Category</label><select className="form-control" required name="Category"><optgroup label="Category"><option value="Foods ">Foods </option><option value="Bars & restaurants">Bars &amp; restaurants</option><option value="Transportation">Transportation</option><option value="School">School</option><option value="Shopping">Shopping</option></optgroup></select></div>
                      <div className="form-group"><label htmlFor="password">Date</label><input className="form-control" type="date" required name="Date" /></div>
                      <div className="form-group"><label htmlFor="email">Spending</label><input className="form-control" type="number" placeholder={0} min={0} step="0.01" required name="Spending" /></div><button className="btn btn-success btn-block" type="submit">Validate</button></form>
                  </div>
                  {/* FORM 2*/}
                  <div className="col">
                    <form>
                      <div className="form-group">
                        <h1>Notifications</h1>
                      </div>
                      <div className="form-group"><label htmlFor="name">Category</label><select className="form-control" required name="Category"><optgroup label="Category"><option value="Info">Info</option><option value="Recette">Recette</option><option value="Phrase">Phrase</option><option value="Devoir">Devoir</option></optgroup></select></div>
                      <div className="form-group"><label htmlFor="email">Text</label><input className="form-control" type="text" placeholder="Enter your Text" required name="Text" /></div><button className="btn btn-success btn-block" type="submit">Validate</button></form>
                  </div>

                  {/* FORM 3 */}
                  <div className="col">
                    <form>
                      <div className="form-group">
                        <h1>Sticky Notes</h1>
                      </div>
                      <div className="form-group"><label htmlFor="email">Title</label><input className="form-control" type="text" placeholder="Enter your Title" required name="Title" /></div>
                      <div className="form-group"><label htmlFor="email">Notes</label><input className="form-control" type="text" placeholder="Enter your Notes" required name="Notes" /></div><button className="btn btn-success btn-block" type="submit">Validate</button></form>
                  </div>
                </div>
              </div>
              {/* CONTAINER */}


            </section>
          </main>
        </div>

          {/* FOOTER */}
          <Footer></Footer>
          {/* FOOTER */}
      </div>


    )
  }

}

export default Admin;
