import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Spendings extends Component {

    /// CONSTRUCTEUR
    /// CONSTRUCTEUR
    constructor(props) {
        super(props);

        /// this.state.attributs
        this.state = {
            id: '',
            category: '',
            date: new Date(),
            spending: 0,

            /// MAP POUR STOCKER 
            Collection: [{}]
        }

        /// Binding 
        this.componentDidMount = this.componentDidMount.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeSpending = this.onChangeSpending.bind(this)
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
        this.onSubmitUpdate = this.onSubmitUpdate.bind(this)
        this.onSubmitDelete = this.onSubmitDelete.bind(this)

    }

    /// Methode componentDidMount
    async componentDidMount() {
        try {
            await axios.get("http://localhost:5000/Spendings")
                .then(async reponse => {
                    this.setState({
                        Collection: reponse.data
                    })
                    console.log("Collection spendings:", this.state.Collection)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err);
        }
    }

    /// Methodes onChange
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

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeSpending(e) {
        this.setState({
            spending: e.target.value
        })
    }

    /// Methodes ADD / UPDATE / DELETE
    /// ADD
    onSubmitAdd(e) {
        e.preventDefault();
        const spending = {
            category: this.state.category,
            date: this.state.date,
            spending: this.state.spending,
        }

        console.log(spending);
        const url = 'http://localhost:5000/spendings/add';
        axios.post(url, spending)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/spendings';
    }

    /// Update
    onSubmitUpdate(e) {
        e.preventDefault();
        const spending = {
            category: this.state.category,
            date: this.state.date,
            spending: this.state.spending,
        }

        console.log(spending);
        const url = 'http://localhost:5000/spendings/update/' + this.state.id;
        axios.post(url, spending)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/spendings';
    }

    /// Delete
    onSubmitDelete(e) {
        e.preventDefault();
        const spending = {
            category: this.state.category,
            date: this.state.date,
            depense: this.state.spending,
        }
        console.log(spending);
        const url = 'http://localhost:5000/spendings/' + this.state.id;
        axios.delete(url)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/spendings';
    }

    /// METHODE RENDER !!! *****************************************************************
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
                            <h3> #Create </h3>

                            <form onSubmit={this.onSubmitAdd}>
                                <div className="form-group">
                                    <label> Category </label>
                                    <select className="form-control" required
                                        value={this.state.category}
                                        onChange={this.onChangeCategory}>
                                        <optgroup label="Categories">
                                            <option value=""> Selectionnez une catégorie</option>
                                            <option value="Bars"> Bars </option>
                                            <option value="Restaurant"> Restaurant</option>
                                            <option value="Shopping"> Shopping </option>
                                            <option value="Transport">Transport</option>
                                            <option value="Games">Games</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Date: </label>
                                    <div>
                                        <DatePicker
                                            selected={this.state.date}
                                            onChange={this.onChangeDate}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Spending</label>
                                    <input className="form-control" type="number" placeholder={0} min={0} step="0.01" required
                                        value={this.state.spending}
                                        onChange={this.onChangeSpending}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Create Spendings" className="btn btn-success btn-block" />
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
                                            <option value=""> Selectionnez une catégorie</option>
                                            <option value="Bars"> Bars </option>
                                            <option value="Restaurant"> Restaurant</option>
                                            <option value="Shopping"> Shopping </option>
                                            <option value="Transport">Transport</option>
                                            <option value="Games">Games</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Date: </label>
                                    <div>
                                        <DatePicker
                                            selected={this.state.date}
                                            onChange={this.onChangeDate}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Spending</label>
                                    <input className="form-control" type="number" placeholder={0} min={0} step="0.01" required
                                        value={this.state.spending}
                                        onChange={this.onChangeSpending}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Update StickyNotes" className="btn btn-warning btn-block" />
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
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th>_id</th>
                                        <th>category</th>
                                        <th>date</th>
                                        <th>spending</th>
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
                                                    <td className="text-center">{Collection.date}</td>
                                                    <td className="text-center">{Collection.spending}</td>
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

export default Spendings;