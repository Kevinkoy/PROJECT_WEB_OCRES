import React from 'react';
import Button from '@storybook/react/dist/demo/Button';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    /// no Constructor
    /// Methode Render
    render() {
        return (
            <div>
            <Button>
              <Link to="/Admin"> Admin </Link>
            </Button>
            </div>
        );
    }

}

export default Navbar;