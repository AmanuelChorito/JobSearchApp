import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
class SignupComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            useremail: '',
            password:'',
            picked:'JobSeeker'
    }
    }
    signuphanlde = () => {
        {
            
            this.props.signupdetail(this.state.useremail, this.state.password, this.state.picked)
        }
    }
    render() {
        const { useremail, password } = this.state
        return (
            <>
                <h1>Signup Form</h1>
                <div className="container">
                    <Formik initialValues={{ picked:'', }} onSubmit={this.signuphanlde} validate={this.validate} enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="useremail" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="password" component="div>" className="alert alert-warning"></ErrorMessage>
                                    {!this.state.loginstate && <div className="alert alert-warning"> Invalid Credentials</div>}
                                    <fieldset className="form-group">
                                        <label>User name: </label>
                                        <Field className="form-control" type="text" name="useremail" onChange={this.handleChange}></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Password:     </label>
                                        <Field className="form-control" type="password" name="password" onChange={this.handleChange}></Field>
                                    </fieldset>
                                    <fieldset lassName="form-group">
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
                                        <button className="btn btn-success btn-lg "  type="submit">Signup</button>
                                    </fieldset>
                                </Form>)

                        }


                    </Formik>

                </div>
            </>
        )
    }
    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value })
    }
   

}
export default SignupComponent
