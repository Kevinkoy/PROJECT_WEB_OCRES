import Axios from 'axios';
import React, { Component } from 'react';
import ReactStickies from 'react-stickies'; //ES6
 
class Widget5 extends ReactStickies {

  /// CONSTRUCTOR
    constructor(props) {
      super(props);
      this.state = {
        notes: [],
        /// COLLECTION DB
        Collection: []
      }
      /// BINDING
      this.onChange = this.onChange.bind(this)
      this.onSave = this.onSave.bind(this)
    }  

    /// COMPONENTDIDMOUNT
    async componentDidMount(){
      try{
        await Axios.get("http://localhost:5000/StickyNotes")
        .then(async reponse => {
          this.setState({
            Collection: reponse.data
          })
          //console.log(data)
          console.log(this.state.Collection)
        })
        .catch(err => {
          console.log(err)
        })
      }catch(err){
        console.log(err);
      }
    }

    /// onSave
    onSave () {
      // Make sure to delete the editorState before saving to backend
      const notes = this.state.notes;

      notes.map(note => {
        delete note.editorState;
      })
      // Make service call to save notes
      // Code goes here...
    }
    onChange (notes) {
      this.setState({ // Update the notes state
        notes
      })
    }
    
render() {
  const { Collection } = this.state;
    return (
         <ReactStickies
         notes={this.state.notes}
         onChange={this.onChange}
       />            
    )
  }
};

export default Widget5;

