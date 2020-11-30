import React from 'react';



class Footer extends React.Component {

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
                {/* CONFIGURATIONS */}


                {/* FOOTERS */}
                <footer className="page-footer dark" style={{marginLeft:"100px"}}>
                     {/* LA LIGNE SUPER IMPORTANTE POUR CSS BOOTSTRAP */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <div className="footer-copyright">
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{color:"white"}}> ECE Web Project by CANETIPUIG Pau - KOY Kévin - MALAN Jasmine </p>
                    </div>
                </footer>
                {/* FOOTERS */}

            </div>
        );
    }

}

export default Footer;