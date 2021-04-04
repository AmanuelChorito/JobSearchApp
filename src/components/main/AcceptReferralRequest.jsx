import React, { Component } from 'react'
import referalrecieveapi from '../../api/referalrecieveapi.js'
class ReferralRequest extends Component {
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


        referalrecieveapi.getref()
            .then(response => {

                this.setState({ referrals: response.data })
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                <h4> Referral Requests</h4>

                <div className="container">
                    <table className="table ">
                        <thead class="thead-light">
                            <tr>

                                <th>name </th>
                                <th>preferredJob</th>
                                <th>Requests</th>
                                <th>View Profile</th>
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
                                        <td>{<a href="#" class="btn btn-info btn-lg active active" role="button" aria-pressed="true">Accept Request</a>}</td>
                                        <td>{<a href="#" class="btn btn-info btn-lg active active" role="button" aria-pressed="true">View Profile</a>}</td>
                                    </tr>
                                )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ReferralRequest
