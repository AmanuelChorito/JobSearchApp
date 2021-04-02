import React, { Component } from 'react'
import moment from 'moment'
import AuthenticationService from '../../js/AuthenticationService.js'
import jobapi from '../../api/jobapi.js'

class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
           dataread:[],
           message:''
        }
    }

    componentDidMount() {
       this.refreshTodos();
    }
    refreshTodos = () => {
        // what and where to component

        let username = AuthenticationService.getUserLoggedIn()
        jobapi.retrieveAllTodos(this.state.position, this.state.place)
            .then(response => {

                this.setState({ dataread: response.data })
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                <h1> List of Jobs</h1>
                {this.state.message && <div class="alert alert-success"> {this.state.message}</div>}
                <div className="container">
                    <table className="table ">
                        <thead class="thead-light">
                            <tr>
                                <th>Posted Date </th>
                                <th>Job Description </th>
                                <th>Job title</th>
                                <th>Place</th>
                                <th>Apply Job</th>
                              </tr></thead>

                        <tbody>
                            {
                                this.state.dataread.map(job =>
                                    <tr key={job.id}>
                                        <td>{moment(job.created).format('MM-DD-YYYY')}
                                        </td>
                                        <td> {job.description}</td>
                                        <td> {job.title}</td>
                                        <td> {(job.location.display_name)}</td>
                                        <td>{<a href="#" class="btn btn-info btn-lg active active" role="button" aria-pressed="true">Apply</a>}</td>
                                    </tr>
                                )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Jobs
