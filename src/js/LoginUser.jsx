import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import login from '../api/loginapi.js'


class LoginUser  extends Component{
    constructor(props) {
        super(props)
        this.state = {
          useremail:'',
          password:''
            }

    }
    



loginUser = (useremail, password) => {


    login.getuserDetailpost(useremail, password)
        .then(
            Response => {
                this.setState({
                    roleobj: Response.data

                })


                this.props.history.push('/welcome')
            }
        )

    //    .catch(

    //        this.setState({ loginstate: false}),
    //        this.props.history.push('/Login')

    //    )

    console.log(useremail + " " + password)
    if (useremail === 'seeker' && password === 'dummy') {

        this.setState({ userAlmuni: false, userJobSeeker: true })
        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.userAlmuni)
        this.props.history.push('/welcome')
    }
    else if (useremail === 'almuni' && password === 'dummy') {
        this.setState({ userAlmuni: true, userJobSeeker: false })
        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, this.state.userJobSeeker)

        this.props.history.push('/welcome')
    }
    else {

        this.setState({ LoginSuccess: false })
        this.setState({ hasLoginFailed: true })
    }

}
}

export default   LoginUser