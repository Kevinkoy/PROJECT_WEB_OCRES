import React, { Component } from 'react';
//import ReactStickies from 'react-stickies'; //ES6
import axios from 'axios';
import Header from './Header';

class StickyNotes extends Component {

    /// CONSTRUCTEUR
    constructor(props) {
        super(props);

        /// this.state.attributs
        this.state = {
            title: '',
            notes: '',
        }

        /// Binding 
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeNotes = this.onChangeNotes.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    /// Methodes onChange & onSave
    onChangeTitle(e) {
        this.setState({ // Update the notes state
            title: e.target.value
        })
    }

    onChangeNotes(e) {
        this.setState({ // Update the notes state
            notes: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const stickynote = {
          title: this.state.title,
          notes: this.state.notes,
        }
    
        console.log(stickynote);
    
        axios.post('http://localhost:5000/stickynotes/add', stickynote)
          .then(res => console.log(res.data));
    
       // window.location = '/';
      }


    render() {

        return (
            
            <div>
                <Header></Header>
                <h3>Create Sticky Notes</h3>

                <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                        <label> Title </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label> Notes </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.notes}
                            onChange={this.onChangeNotes}
                        />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Create StickyNotes" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};

export default StickyNotes;