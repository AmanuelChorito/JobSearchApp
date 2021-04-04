import React, { Component } from 'react'
import Almunipostpostrefapi from '../../api/almunipostrefapi'

class SendReferral extends Component {
    constructor(props) {
        super(props)
        this.state = {
            referrals: []
        }
    }

    componentDidMount() {
        this.refreshTodos();
    }
    refreshTodos = () => {
        // what and where to component


        Almunipostpostrefapi.getrefpost()
            .then(response => {

                this.setState({ referrals: response.data })
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                <h4> List of referrals</h4>

                <div className="container">
                    <table className="table ">
                        <thead class="thead-light">
                            <tr>

                                <th>Job title </th>
                                <th>Job Description</th>
                                <th> request status</th>
                                <th></th>
                            </tr></thead>

                        <tbody>
                            {
                                this.state.referrals.map(referral =>
                                    <tr key={referral.description}>
                                        <td>{(referral.url)}
                                        </td>
                                        <td> {referral.description}</td>
                                        <td> {referral.url}</td>
                                        <td>{<a href="#" class="btn btn-info btn-lg active active" role="button" aria-pressed="true">Send Request</a>}</td>
                                    </tr>
                                )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default SendReferral
