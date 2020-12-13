import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class StickyNotes extends Component {

    /// CONSTRUCTEUR
    constructor(props) {
        super(props);

        /// this.state.attributs
        this.state = {
            id: '',
            title: '',
            notes: '',
            /// MAP POUR STOCKER 
            Collection: []
        }

        /// Binding 
        this.componentDidMount = this.componentDidMount.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeNotes = this.onChangeNotes.bind(this)
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
        this.onSubmitUpdate = this.onSubmitUpdate.bind(this)
        this.onSubmitDelete = this.onSubmitDelete.bind(this)

    }

    /// Methode componentDidMount

    async componentDidMount() {
        try {
            await axios.get("http://localhost:5000/StickyNotes")
                .then(async reponse => {
                    this.setState({
                        Collection: reponse.data
                    })
                    console.log("Collection stickynote:", this.state.Collection)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err);
        }
    }

    /// Methodes onChange & onSave
    onChangeId(e) {
        this.setState({
            id: e.target.value
        })
    }

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



    /// ADD
    onSubmitAdd(e) {
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
        window.location = '/stickynotes';
    }

    /// Update
    onSubmitUpdate(e) {
        e.preventDefault();
        const stickynote = {
            title: this.state.title,
            notes: this.state.notes,
        }

        console.log(stickynote);
        const url = 'http://localhost:5000/stickynotes/update/' + this.state.id;
        axios.post(url, stickynote)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/stickynotes';
    }

    /// Update
    onSubmitDelete(e) {
        const stickynote = {
            title: this.state.title,
            notes: this.state.notes,
        }
        console.log(stickynote);
        const url = 'http://localhost:5000/stickynotes/' + this.state.id;
        axios.delete(url)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/stickynotes';
    }

    /// onClick Delete
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

        const { Collection } = this.state;
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

                            <form onSubmit={this.onSubmitAdd}>
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

                            <form onSubmit={this.onSubmitUpdate}>

                                <div className="form-group">
                                    <label> _id </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.id}
                                        onChange={this.onChangeId}

                                    />
                                </div>

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
                                    <input type="submit" value="Update StickyNotes" className="btn btn-warning btn-block" />
                                </div>
                            </form>
                        </div>

                        {/***** DELETE by ID *****/}
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <h3>Delete (by _id) </h3>

                            <form onSubmit={this.onSubmitDelete}>
                                <div className="form-group">
                                    <label> _id </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.id}
                                        onChange={this.onChangeId}
                                    />
                                </div>



                                <div className="form-group">
                                    <input type="submit" value="Delete StickyNotes" className="btn btn-danger btn-block" />
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

                                {
                                    Collection.length ?
                                        Collection.map(Collection =>

                                            <tr>
                                                <td className="text-center">{Collection._id}</td>
                                                <td className="text-center">{Collection.title}</td>
                                                <td className="text-center">{Collection.notes}</td>
                                                <td className="text-center">{Collection.createdAt}</td>
                                                <td className="text-center">{Collection.updatedAt}</td>
                                                <td className="text-center">{Collection.__v}</td>
                                            </tr>
                                        ) :
                                        null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        )
    }
};

export default StickyNotes;