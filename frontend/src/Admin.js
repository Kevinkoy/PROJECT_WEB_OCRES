import React from 'react';
import Header from './Components/Header';

class Admin extends React.Component {

  render() {

    return (
      <div>
        <Header></Header>
        <div className="form-group">
          <div className="row text-center">
            <div className="col"><label className="col-form-label text-center">Admin Form</label></div>
          </div>
          <form>
            <div className="form-group"><label>Category</label><select className="form-control"><optgroup label="Select category"><option value="Shopping">Shopping</option><option value="Food" selected>Food</option><option value="Transportation">Transportation</option><option value="Bars & Restaurants">Bars &amp; Restaurants</option><option value /></optgroup></select></div>
            <div className="form-group"><label>Dates</label><input className="form-control" type="date" /></div>
            <div className="form-group"><label>Spending</label><input type="number" className="form-control" min={0} step="0.01" placeholder="0.00€" /></div>
            <div className="form-group" style={{ textAlign: 'center' }}><button className="btn btn-success btn-block" type="submit" style={{ textAlign: 'center' }}>Submit</button></div>
          </form>
        </div>
      </div>


    )
  }

}

export default Admin;
