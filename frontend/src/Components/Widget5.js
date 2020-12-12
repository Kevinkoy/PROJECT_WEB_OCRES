import Axios from 'axios';
import React, { Component } from 'react';
import ReactStickies from 'react-stickies'; //ES6
 
class Widget5 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        notes: [],
        allNote: [
          {
            title: 'Regge',
            notes: 'jaime bien'
          },

        ]

      }
      this.onChange = this.onChange.bind(this)
      this.onSave = this.onSave.bind(this)
    }  
    async componentDidMount(){
      try{
        await Axios.get("http://localhost:5000/StickyNotes")
        .then(async reponse => {
          const data = await reponse.data;
          const data2=[];
          
          for(var i = 0 ; i<data.length ; i++ ){
            var post={
              text: data[i].notes,
              title: data[i].title
            }
            data2.push(post)
          }
          this.setState({
            allNote: data
          })
          
          //console.log(data)
          console.log(this.state.allNote)
        })
        .catch(err => {
          console.log(err)
        })
      }catch(err){
        console.log(err);
      }
    }
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
    clickElem(e){
      console.log(e.target.id)
      const url='http://localhost:5000/StickyNotes/'+e.target.id;
      Axios.delete(url)
      .then( res => {
        console.log(res.data.message);
      }).catch(err =>{
        console.log(err)
      })
    }
render() {
    return (
      
      /*this.items = this.state.allNote.map((item) =>
          <ReactStickies
         
          notes={}
          onChange={this.onChange}
          />
      )
      <ReactStickies
         
          notes={this.state.allNote}
          onChange={this.onChange}
          />

         
     
         <div id={this.state.allNote[0]._id} onClick={this.clickElem}> 
          
         {this.state.allNote[0].title}

         </div>
          */
         <ReactStickies
         notes={this.state.notes}
         onChange={this.onChange}
       />            
    )
  }
};

export default Widget5;

