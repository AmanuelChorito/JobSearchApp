import React, { Component } from 'react'
import Almunipostjobapi from '../../api/almunipostjobapi'

class AlmuniPostViewComponent extends Component 
{
constructor(props) {
    super(props)
        this.state = {
           jobs:[]
}
    }

componentDidMount() {
    this.refreshTodos();
}
refreshTodos = () => {
    // what and where to component

    
    Almunipostjobapi.getjobpost()
        .then(response => {

            this.setState({ jobs: response.data })
            console.log(response.data)
        })
}

render() {
    return (
        <div>
            <h3> List of Jobs by ALmuni</h3>
          
            <div className="container">
                <table className="table ">
                    <thead class="thead-light">
                        <tr>
                           
                            <th>Job Description </th>
                            <th>Job url</th>
                            
                            <th></th>
                        </tr></thead>

                    <tbody>
                        {
                            this.state.jobs.map(job =>
                                <tr key={job.description}>
                                    <td>{(job.url)}
                                    </td>
                                    <td> {job.description}</td>
                                    <td> {job.url}</td>
                                   
                                </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
}
export default AlmuniPostViewComponent
