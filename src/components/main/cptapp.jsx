import React, { Component,  } from 'react'
import {  Router, Route, Switch, Redirect } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRout.jsx'
import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import SignupComponent from './SignupComponent.jsx'
import AlmuniPostViewComponent from './AlmuniPostViewComponent.jsx'
import PostRef from './postref.jsx'
import PostJob from './postjob.jsx'
import Jobs from './Jobs.jsx'
import SendReferral from './SendReferralRequest.jsx'
import UserProfile from './UserProfile.jsx'
import loginapi from '../../api/loginapi'
import AuthenticationService from '../../js/AuthenticationService.js'
import { createHashHistory } from 'history'
import { useHistory } from "react-router-dom";
import history from '../../js/history';
import sigup from '../../api/signup.js'
import ReferralRequest from './AcceptReferralRequest'
import signup from '../../api/signup.js'
class CptApp extends Component {
    constructor(props){
        super(props)
      
       this.state = {
           
            useremail: 'aman',
            password: '',
            isuserAlmuni:'false',
             isuserJobSeeker:'false',
             loginstate:'',
           localStorage:'',
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

        console.log(useremail)
        loginapi.getuserDetailpost(useremail, password)
         
          .then(
                Response => {
                    this.setState({
                        
                            // useremail:Response.data.useremail,
                            //  roleobj: {
                            //     role: Response.data.role,
                            //         name: Response.data.name
                            //             tephoneNumber: Response.data.telephoneNumber
                            //                 address: Response.data.address,
                            //                     roleName: Response.data.roleName,
                            //                         preferredJob: Response.data.preferredJob,
                            //                             preferredCompany: Response.data.preferredCompany
                                               //   localstorage : sessionStorage.setItem("authorization", Response.data.token)
                                                  
                    })

                    console.log(Response.data.id)
                    this.props.history.push({ pathname: '/welcome',}) 
                }
            )

           .catch(

               this.setState({ loginstate: false}),
               this.props.history.push('/Login')

           )
    
        if (useremail === 'seeker@gmail.com' && password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(useremail, this.state.roleobj.role)
            if(AuthenticationService.isUserLoggedIn)
             {
           
          history.push('/welcome')
             }
            

        }
        else if (this.state.useremail === 'almuni' && this.state.password === 'dummy') {
            this.setState({ userAlmuni: true, userJobSeeker: false })
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.userJobSeeker)

            history.push('/welcome')
        }
        else {

            this.setState({ LoginSuccess: false })
            this.setState({ hasLoginFailed: true })
        }

    }
    
    onsignup=(data)=>{
        console.log("signup component" +data)
       
         signup.getuserDetailpost(data)
            .then(
                Response => {
                    this.setState({
                       // useremail:Response.data.useremail,
                            role: Response.data.role,


                    })

                 //   console.log(Response.data.id)
                  history.push('/welcome')
                }
            )

           .catch(

               this.setState({ loginstate: false}),
               this.props.history.push('/Login')

           )

    }

    render = () => {
        //const userData = this.getData();
  
        return (
            <div className="CptApp">
                <Router history={history}>
                    <HeaderComponent userrole={this.state.roleobj.role} ></HeaderComponent>
                                       
                    <Switch>
                        <Route path="/" exact>
                            <LoginComponent getUserDetail={this.onSubmit}/>
                        </Route>
                        
                        <Route path="/Login" >
                        
                        <LoginComponent getUserDetail={this.onSubmit}/>
                        </Route>

                        <Route path="/Signup" >
                            <SignupComponent signupdetail={this.onsignup}  />
                        </Route>
                        <AuthenticatedRoute path="/welcome">
                            <WelcomeComponent />
                        </AuthenticatedRoute>
                            
                        <AuthenticatedRoute path="/Almunipost">
                            <AlmuniPostViewComponent/>
                        </AuthenticatedRoute> 


                        <AuthenticatedRoute path="/Postjob"  >
                            <PostJob {...this.state}/>
                        </AuthenticatedRoute>

                        <AuthenticatedRoute path="/Postref" >
                            <PostRef />
                        </AuthenticatedRoute>

                        <AuthenticatedRoute path="/Jobs">
                            <Jobs/>
                        </AuthenticatedRoute>


                        <AuthenticatedRoute path="/SendReferral" >
                            <SendReferral {...this.state}/>
                        </AuthenticatedRoute>
        
                        <AuthenticatedRoute path="/ReferralRequest" >
                            <ReferralRequest {...this.state} />
                        </AuthenticatedRoute>

                        <AuthenticatedRoute path="/UserProfile" >
                        
                            <UserProfile  {...this.state}/>
        </AuthenticatedRoute>

                        {/*<Route path="/UserProfile" >

                            <UserProfile  {...this.state} />
        </Route>*/}

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