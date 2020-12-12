import React, { Component } from 'react';
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
            /// MAP POUR STOCKER 
            allNote: [
                {
                    title: '',
                    notes: ''
                },

            ]
        }

        /// Binding 
        this.componentDidMount = this.componentDidMount.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeNotes = this.onChangeNotes.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    /// Methode componentDidMount
    async componentDidMount() {
        try {
            await axios.get("http://localhost:5000/StickyNotes")
                .then(async reponse => {
                    const data = await reponse.data;
                    /*
                      const data2 = [];
  
                      for (var i = 0; i < data.length; i++) {
                          var post = {
                              text: data[i].notes,
                              title: data[i].title
                          }
                          data2.push(post)
                      }
                      */
                    this.setState({
                        allNote: data
                    })
                    console.log("Collection stickynote:", this.state.allNote)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err);
        }
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

    /// AJOUTER
    onSubmit(e) {
        e.preventDefault();
        const stickynote = {
            title: this.state.title,
            notes: this.state.notes,
        }

        console.log(stickynote);
        const url = 'http://localhost:5000/stickynotes/add';
        axios.post(url, stickynote)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/';
    }

    /// SUPPRIMER
    clickElem(e) {
        console.log(e.target.id)
        const url = 'http://localhost:5000/StickyNotes/' + e.target.id;
        axios.delete(url)
            .then(res => {
                console.log(res.data.message);
            }).catch(err => {
                console.log(err)
            })
    }

    /// METHODE RENDER !!!
    render() {
        return (

            <div>
                {/***** HEADER *****/}
                <Header></Header>
                {/***** HEADER *****/}


                {/***** BODY *****/}
                {/* CONTAINER */}
                <div className="container">

                    {/* ROW 1 */}
                    <div className="row">
                        {/***** AJOUTER *****/}
                        <div className="col-sm-6 col-md-6 col-lg-4">
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
                                    <input type="submit" value="Create StickyNotes" className="btn btn-success btn-block" />
                                </div>
                            </form>
                        </div>


                        {/***** UPDATE *****/}
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <h3> Update (by _id) </h3>

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
                                    <input type="submit" value="Update StickyNotes" className="btn btn-success btn-block" />
                                </div>
                            </form>
                        </div>

                        {/***** DELETE by ID *****/}
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <h3>Delete (by _id) </h3>

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
                                    <input type="submit" value="Delete StickyNotes" className="btn btn-success btn-block" />
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* END ROW 1 */}


                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {/***** DISPLAY ALL COLECTIONS *****/}
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>_id</th>
                                    <th>title</th>
                                    <th>notes</th>
                                    <th>createdAt</th>
                                    <th>updateAt</th>
                                    <th>__v</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* BOUCLE FOR pour créer nombre de ligne en fonction du nb de row dans la collection */}

                                <tr>
                                    <td className="text-center">{this.state.allNote[0]._id}</td>
                                    <td className="text-center">{this.state.allNote[0].title}</td>
                                    <td className="text-center">{this.state.allNote[0].notes}</td>
                                    <td className="text-center">{this.state.allNote[0].createdAt}</td>
                                    <td className="text-center">{this.state.allNote[0].updatedAt}</td>
                                    <td className="text-center">{this.state.allNote[0].__v}</td>
                                </tr>

                                <tr>
                                    <td className="text-center">{this.state.allNote[0]._id}</td>
                                    <td className="text-center">{this.state.allNote[0].title}</td>
                                    <td className="text-center">{this.state.allNote[0].notes}</td>
                                    <td className="text-center">{this.state.allNote[0].createdAt}</td>
                                    <td className="text-center">{this.state.allNote[0].updatedAt}</td>
                                    <td className="text-center">{this.state.allNote[0].__v}</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        )
    }
};

export default StickyNotes;