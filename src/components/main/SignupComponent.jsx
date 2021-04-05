import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { getRoles } from '@testing-library/dom'
class SignupComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password:'',
            picked:'',
            role:{
            name:'',
            telephoneNumber:'',
            address:'',
            currentJob:' ',
            currentCompany:'',
            preferredJob:'',
            preferredCompany:'' }



            }

     

    }
    validate = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = ' to signup User Email required'
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
            
            console.log("signup component"+this.state.email)
            this.props.signupdetail({...this.state})
            
        }
    }
    render() {
        const { email, password, picked } = this.state
        return (
            <div>
                <h1>Signup Form</h1>
                <div className="container">
                    <Formik initialValues={{email:'', password:'', picked:''}}  onSubmit={this.signuphanlde} validate={this.validation} enableReinitialize={true}>
                        {
                            (props) => (
                                <Form >
                                
                                    <ErrorMessage name="email" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="password" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="picked" component="div" className="alert alert-warning"></ErrorMessage>

                                    <fieldset className="form-group">

                                        <label>First Last Name: </label>
                                        <Field className="form-control" value={this.state.name} type="text" name="name" onChange={this.handleChange} required></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                       
                                    <label>Email: </label>
                                        <Field className="form-control" value={this.state.email}type="email" name="email" onChange={this.handleChange} required></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Password:     </label>
                                        <Field className="form-control" value= {this.state.password} type="password" name="password" onChange={this.handleChange} required></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>telephoneNumber:     </label>
                                        <Field className="form-control" value={this.state.telephoneNumber} type="phone" name="telephoneNumber" onChange={this.handleChange} required></Field>
                                    </fieldset>
                                    <fieldset> <label>Status:     </label>
                                        <select
                                            name="picked"
                                            value={this.state.picked}
                                            onChange={this.handleChange}
                                                                                      
                                        >
                                            <option value="STUDENT" label="STUDENT" />
                                            <option value="ALMUNI" label="ALMUNI" />
                                        </select>
                                    
                                    </fieldset>
                                    
                                    
                                    <fieldset className="form-group">
                                        {this.state.picked === 'ALMUNI' &&  <label>currentJob:     </label>}
                                        {this.state.picked === 'ALMUNI' &&   <Field className="form-control" value={this.state.currentJob} type="phone" name="currentjob" onChange={this.handleChange} required></Field>}
                                    </fieldset>
                                    <fieldset className="form-group">
                                        {this.state.picked === 'ALMUNI' &&   <label>currentCompany:     </label>}
                                        {this.state.picked === 'ALMUNI' &&  <Field className="form-control" value={this.state.currentCompany} type="phone" name="cuurentcompany" onChange={this.handleChange} required></Field>}
                                    </fieldset>

                                    <fieldset className="form-group">
                                        {this.state.picked === 'STUDENT' && <label>preferredJob:     </label>}
                                        {this.state.picked === 'STUDENT' && <Field className="form-control" value={this.state.preferredJob} type="phone" name="currentjob" onChange={this.handleChange} required></Field>}
                                    </fieldset>
                                    <fieldset className="form-group">
                                        {this.state.picked === 'STUDENT' && <label>preferredCompany:     </label>}
                                        {this.state.picked === 'STUDENT' && <Field className="form-control" value={this.state.preferredCompany} type="phone" name="cuurentcompany" onChange={this.handleChange} required></Field>}
                                    </fieldset>

                                   {/*} <fieldset className="form-group">
                                        <label>
                                            <Field type="radio" name="picked" value="JobSeeker" onChange={this.handleChange} checked={this.state.picked ==='JobSeeker'}  />Job Seeker
                                     </label>
                                     </fieldset>
                                     <fieldset>
                                        <label>
                                            <Field type="radio" name="picked" value="Almuni" onChange={this.handleChange} checked={this.state.picked === 'Almuni'}/> MIU Almuni
                                     </label>
                            </fieldset>*/}
                                    
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
