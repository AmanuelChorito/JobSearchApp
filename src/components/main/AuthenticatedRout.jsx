import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../../js/AuthenticationService.js'


class AuthenticatedRoute extends Component {

    render() {
            //temporary
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}></Route>
        }
        else {
            return <Redirect to="/login"></Redirect>
        }


    }
}
export default AuthenticatedRoute