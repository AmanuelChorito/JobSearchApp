import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRout.jsx'
import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import SignupComponent from './SignupComponent.jsx'
import AlmuniPostViewComponent from './AlmuniPostViewComponent.jsx'
import Post from './post.jsx'
import Job from './Jobs.jsx'
import ReferralRequests from './ReferralRequest.jsx'
import UserProfile from './UserProfile.jsx'
import login from '../../api/login.js'
import AuthenticationService from '../../js/AuthenticationService.js'

class CptApp extends Component {
    constructor(props){
        super(props)
       this.state = {
           
            useremail: 'aman',
            password: '',
            isuserAlmuni:'false',
             isuserJobSeeker:'false',
             loginstate:'',
         roleobj: {
                role: 'almuni', 
                name: '', 
                tephoneNumber: '',
                address: '',
                roleName: '',
                preferredJob: '',
                preferredCompany:''}
        }
    }


    onSubmit = (useremail, password) => {


        // login.getuserDetailpost(useremail, password)
        //     .then(
        //         Response => {
        //             this.setState({
        //                 
                            // useremail:Response.data.useremail,
                            //  roleobj: {
                            //     role: Response.data.role,
                            //         name: Response.data.name
                            //             tephoneNumber: Response.data.telephoneNumber
                            //                 address: Response.data.address,
                            //                     roleName: Response.data.roleName,
                            //                         preferredJob: Response.data.preferredJob,
                            //                             preferredCompany: Response.data.preferredCompany

        //             })

        //             console.log(Response.data.id)
        //             this.props.history.push({ pathname: '/welcome',}) state: { id: this.state.id } })
        //         }
        //     )

        //    .catch(

        //        this.setState({ loginstate: false}),
        //        this.props.history.push('/Login')

        //    )

        if (useremail === 'seeker' && password === 'dummy') {
            
           
            AuthenticationService.registerSuccessfulLogin(this.state.useremail,  this.state.roleobj.role)
            this.props.history.push('/welcome')

        }
        else if (this.state.useremail === 'almuni' && this.state.password === 'dummy') {
            this.setState({ userAlmuni: true, userJobSeeker: false })
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.userJobSeeker)

            this.props.history.push('/welcome')
        }
        else {

            this.setState({ LoginSuccess: false })
            this.setState({ hasLoginFailed: true })
        }

    }
    onsignup=(useremail,password,role)=>{
        console.log(role)
         // signup.getuserDetailpost(useremail, password, role)
        //     .then(
        //         Response => {
        //             this.setState({
        //                // useremail:Response.data.useremail,
                            //role: Response.data.role,


        //             })

        //             console.log(Response.data.id)
        //             this.props.history.push({ pathname: '/welcome', state: { id: this.state.id } })
        //         }
        //     )

        //    .catch(

        //        this.setState({ loginstate: false}),
        //        this.props.history.push('/Login')

        //    )

    }

    render = () => {
        //const userData = this.getData();
        
        return (
            <div className="CptApp">
                <Router>
                    <HeaderComponent {...this.state} ></HeaderComponent>
                                       
                    <Switch>
                        <Route path="/" exact>
                            <LoginComponent getUserDetail={this.onSubmit}/>
                        </Route>
                        
                        <Route path="/Login" >
                        
                        <LoginComponent getUserDetail={this.onSubmit}/>
                        </Route>

                        <Route path="/Signup" >
                        <SignupComponent signupdetail={this.onsignup} />
                        </Route>
                        <AuthenticatedRoute path="/welcome" component={WelcomeComponent} >
                            <WelcomeComponent detail={this.state}/>
                        </AuthenticatedRoute>

                        <AuthenticatedRoute path="/Almunipost/">
                            <AlmuniPostViewComponent/>
                        </AuthenticatedRoute> 


                        <AuthenticatedRoute path="/Post/" >
                            <Post />
                        </AuthenticatedRoute>


                        <AuthenticatedRoute path="/Jobs/">
                            <component></component>
                        </AuthenticatedRoute>


                        <AuthenticatedRoute path="/ReferralRequests/" >
                            <ReferralRequests/>
                        </AuthenticatedRoute>


                        <AuthenticatedRoute path="/UserProfile" >
                        
                            <UserProfile  {...this.state}/>
                        </AuthenticatedRoute>


                        <AuthenticatedRoute path="/Logout">
                        
                            <LogoutComponent />

                        </AuthenticatedRoute> 
                        
                       

                    </Switch>
                    <FooterComponent></FooterComponent>
                </Router>
              
            </div>
        )


        
    }




   

}




export default CptApp