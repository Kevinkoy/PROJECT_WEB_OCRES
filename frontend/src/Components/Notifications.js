import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class Notifications extends Component {

    /// CONSTRUCTEUR
    constructor(props) {
        super(props);

        /// this.state.attributs
        this.state = {
            id: '',
            category: '',
            content: '',
            /// MAP POUR STOCKER 
            Collection: []
        }
        /// Binding
        /// Binding 
        this.componentDidMount = this.componentDidMount.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeContent = this.onChangeContent.bind(this)
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
        this.onSubmitUpdate = this.onSubmitUpdate.bind(this)
        this.onSubmitDelete = this.onSubmitDelete.bind(this)
    }

    /// Methodes - componentDidMount
    async componentDidMount() {
        try {
            await axios.get("http://localhost:5000/Notifications")
                .then(async reponse => {
                    this.setState({
                        Collection: reponse.data
                    })
                    console.log("Collection <Notifications>:", this.state.Collection)
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

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }
    onChangeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    /// ADD
    onSubmitAdd(e) {
        e.preventDefault();
        const notification = {
            category: this.state.category,
            content: this.state.content,
        }

        console.log(notification);
        const url = 'http://localhost:5000/notifications/add';
        axios.post(url, notification)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/notifications';
    }

    /// Update
    onSubmitUpdate(e) {
        e.preventDefault();
        const notification = {
            category: this.state.category,
            content: this.state.content,
        }

        console.log(notification);
        const url = 'http://localhost:5000/notifications/update/' + this.state.id;
        axios.post(url, notification)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/notifications';
    }

    /// Update
    onSubmitDelete(e) {
        const notification = {
            category: this.state.category,
            content: this.state.content,
        }
        console.log(notification);
        const url = 'http://localhost:5000/notifications/' + this.state.id;
        axios.delete(url)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/notifications';
    }

    /// ***************************************************************
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
                        <div className="col-sm-max col-md-6 col-lg-4">
                            <h3> Create </h3>

                            <form onSubmit={this.onSubmitAdd}>
                                <div className="form-group">
                                    <label> Category </label>
                                    <select className="form-control" required
                                    value={this.state.category}
                                    onChange={this.onChangeCategory}>
                                        <optgroup label="Categories">
                                            <option value="Info">Info</option>
                                            <option value="Phrase">Phrase</option>
                                            <option value="Recette">Recette</option>
                                            <option value="Devoir">Devoir</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label> Content </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.content}
                                        onChange={this.onChangeContent}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Create Notifications" className="btn btn-success btn-block" />
                                </div>
                            </form>
                        </div>


                        {/***** UPDATE *****/}
                        <div className="col-sm-max col-md-6 col-lg-4">
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
                                    <label> Category </label>
                                    <select className="form-control" required
                                    value={this.state.category}
                                    onChange={this.onChangeCategory}>
                                        <optgroup label="Categories">
                                            <option value="Info">Info</option>
                                            <option value="Phrase">Phrase</option>
                                            <option value="Recette">Recette</option>
                                            <option value="Devoir">Devoir</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label> Content </label>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.content}
                                        onChange={this.onChangeContent}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Update Notifications" className="btn btn-warning btn-block" />
                                </div>
                            </form>
                        </div>

                        {/***** DELETE by ID *****/}
                        <div className="col-sm-max col-md-6 col-lg-4">
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
                                    <input type="submit" value="Delete Notifications" className="btn btn-danger btn-block" />
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
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th>_id</th>
                                        <th>category</th>
                                        <th>content</th>
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
                                                    <td className="text-center">{Collection.category}</td>
                                                    <td className="text-center">{Collection.content}</td>
                                                    <td className="text-center">{new Date(Collection.createdAt).toDateString()}</td>
                                                    <td className="text-center">{new Date(Collection.updatedAt).toLocaleString()}</td>
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
            </div>



        )
    }



}

export default Notifications;