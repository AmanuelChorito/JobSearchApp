import React, { Component, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import AuthenticationService from '../../js/AuthenticationService.js'
import loginapi from '../../api/loginapi.js'
import HeaderComponent  from './HeaderComponent.jsx'
import LoginUser from '../../js/LoginUser.jsx'




// const loginCom = (props) => {
//     const [userDetail, setUserDetail] = useState({
//         userAlmuni: false,
//         userJobSeeker: false,
//         loginstate: true,
//         id: '',
//         useremail: '',
//         password: '',
//         roleobj: {
//             role: 'almuni',
//             name: '',
//             tephoneNumber: '',
//             address: '',
//             roleName: '',
//             preferredJob: '',
//             preferredCompany: ''
//         }
//     })

//     props.getUserDetail = () => {
//         return userDetail;
//     }

//     const onSubmit = () => {

//         login.getuserDetailpost(this.state.useremail, this.state.password)
//             .then(
//                 Response => {
//                     this.setState({
//                         id: Response.data.id

//                     })

//                     console.log(Response.data.id)
//                     this.props.history.push({ pathname: '/welcome', state: { id: this.state.id } })
//                 }
//             )

//         //    .catch(

//         //        this.setState({ loginstate: false}),
//         //        this.props.history.push('/Login')

//         //    )

//         if (this.state.useremail === 'seeker' && this.state.password === 'dummy') {

//             this.setState({ userAlmuni: false, userJobSeeker: true })
//             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.userAlmuni)
//             this.props.history.push('/welcome')
//         }
//         else if (this.state.useremail === 'almuni' && this.state.password === 'dummy') {
//             this.setState({ userAlmuni: true, userJobSeeker: false })
//             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.userJobSeeker)

//             this.props.history.push('/welcome')
//         }
//         else {

//             this.setState({ LoginSuccess: false })
//             this.setState({ hasLoginFailed: true })
//         }

//     }

//     return (
//         <div>hello</div>
//     )
// }

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            useremail: '',
            password: ''
           
        }

    }
    
    submithanlde = () => {
        {
            this.props.getUserDetail(this.state.useremail, this.state.password)
        }
    }
    
    render = () => {
        //const { useremail, password} = this.state
        
        

        return (
                      <div >
               
                <h1>Login</h1>

              {/*}  <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}

                user Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>login</button>
                </div>
                <div className="container"> Dont't have User Account:  <button className="btn btn-success" onClick={this.signupClicked}>SignUp</button> </div>
        */}
      
            <div className="container">
                    <Formik initialValues={{ }} onSubmit={this.submithanlde} validate={this.validate} enableReinitialize={true}>
                    {
                        (props)=>(
                             <Form>
                            <ErrorMessage name="useremail" component="div" className="alert alert-warning"></ErrorMessage>
                            <ErrorMessage name="password" component="div" className="alert alert-warning"></ErrorMessage>
                             {!this.state.loginstate && <div className="alert alert-warning"> Invalid Credentials</div>}
                            <fieldset className="form-group">
                                <label>User name: </label>
                                    <Field className="form-control" type="text" name="useremail" onChange={this.handleChange}></Field>
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Password:     </label>
                                    <Field className="form-control" type="password" name="password" onChange={this.handleChange}></Field>
                           </fieldset>
                               
                                <fieldset className="form-group">
                                    <button className="btn btn-success btn-lg  " type="submit">login</button>
                             </fieldset>

                                
                        </Form>)
                        
                    }
                
                
                </Formik>

                </div>
            </div>
        )
    }
       
    // validate = (values) => {
    //     let errors = {}
    //     if (!values.useremail) {
    //         errors.useremail = 'Required'
    //     } else if (!values.password) {
    //         errors.description = 'Required'
    //     }
      
    //     return errors

    // }
    
    getProfile=(data)=>{
        alert("im working")
    }
    signupClicked=()=>{
        this.props.history.push('/signup')
    
    }
    
    
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })
    }
}



export default LoginComponent