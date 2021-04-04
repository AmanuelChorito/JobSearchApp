import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
class SignupComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            useremail: '',
            password:'',
            picked:''
    }

     

    }
    validate = (values) => {
        let errors = {};
        if (!values.useremail) {
            errors.useremail = ' to signup User Email required'
        } else if (!values.password) {
            errors.password = ' Password Required'
        }
        else if (values.picked === '') {
            errors.picked = 'select your role'
        }

        return errors

    }
    signuphanlde = (values) => {
        {
            
            console.log("signup component"+this.state.useremail)
            this.props.signupdetail(this.state.useremail, this.state.password, this.state.picked)
            
        }
    }
    render() {
        const { useremail, password, picked } = this.state
        return (
            <div>
                <h1>Signup Form</h1>
                <div className="container">
                    <Formik initialValues={{useremail:'', password:'', picked:''}}  onSubmit={this.signuphanlde} validate={this.validation} enableReinitialize={true}>
                        {
                            (props) => (
                                <Form >
                                
                                    <ErrorMessage name="useremail" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="password" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="picked" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>User name: </label>
                                        <Field className="form-control" value={this.state.useremail}type="email" name="useremail" onChange={this.handleChange} required></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Password:     </label>
                                        <Field className="form-control" value= {this.state.password} type="password" name="password" onChange={this.handleChange} required></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>
                                            <Field type="radio" name="picked" value="JobSeeker" onChange={this.handleChange} checked={this.state.picked ==='JobSeeker'}  />Job Seeker
                                     </label>
                                     </fieldset>
                                     <fieldset>
                                        <label>
                                            <Field type="radio" name="picked" value="Almuni" onChange={this.handleChange} checked={this.state.picked === 'Almuni'}/> MIU Almuni
                                     </label>
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <button className="btn btn-success btn-lg " type="submit">Signup</button>
                                    </fieldset>
                                </Form>)

                        }


                    </Formik>

                </div>
            </div>
        )
    }
   
    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value })
    }
   


}
export default SignupComponent
