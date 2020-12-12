import React, { Component } from 'react';
import ReactStickies from 'react-stickies'; //ES6

class Widget5 extends Component {

  /// CONSTRUCTEUR
  constructor(props) {
    super(props);

    /// this.state.attributs
    this.state = {
      notes: []
    }

    /// Binding 
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  /// Methodes
  onSave() {
    // Make sure to delete the editorState before saving to backend
    const notes = this.state.notes;
    notes.map(note => {
      delete note.editorState;
    })
    // Make service call to save notes
    // Code goes here...
  }
  onChange(notes) {
    this.setState({ // Update the notes state
      notes
    })
  }
  render() {
    return (
      <ReactStickies
        notes={this.state.notes}
        onChange={this.onChange}
      />
    )
  }
};

export default Widget5;