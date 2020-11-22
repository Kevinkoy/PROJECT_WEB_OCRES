import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Widget1 from './Components/Widget1';


class App extends React.Component {

  render() {
return (
    <div>
    <Navbar/>
    <Widget1></Widget1>
    </div>
  );
  }

}

export default App;
