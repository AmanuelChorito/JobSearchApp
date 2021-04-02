import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticationService from '../../js/AuthenticationService.js'

import SignUp from '../../js/SignUp.js'

class HeaderComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
      
        const isuserloggedin = AuthenticationService.isUserLoggedIn();
        const isuserseeker=AuthenticationService.getUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a href="" className="navbar-brand"> CPT for Lazy </a></div>
                    <ul className="navbar-nav">
                        {/*<div> {this.props.useremail}</div>*/}
                        {isuserloggedin && <li ><Link className="nav-link" to="/welcome">Home </Link></li>}
                        {isuserloggedin  && <li ><Link className="nav-link" to="/Jobs"> Jobs</Link></li>}
                        {isuserloggedin  &&<li ><Link className="nav-link" to="/Almunipost"> Almuni Posts</Link></li>}
                        {isuserloggedin && <li ><Link className="nav-link" to="/Post"> Posts</Link></li>}
                        {isuserloggedin && <li ><Link className="nav-link" to="/ReferralRequests"> Referral Requests</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isuserloggedin && <li><Link className="nav-link" to="/Login">Login</Link></li>}
                        {isuserloggedin && <li><Link className="nav-link " to="/UserProfile">Profile</Link></li>}

                        {isuserloggedin && <li> <Link className="nav-link" to="/Logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        {!isuserloggedin && <li> <Link className="nav-link" to="/Signup" onClick={SignUp.signUp()}>Sign Up</Link></li>}
                    </ul>
                </nav>

            </header>
        )
    }
}
export default withRouter(HeaderComponent)