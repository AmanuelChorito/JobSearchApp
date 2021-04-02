import React, { Component } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
class UserProfile extends Component {
    constructor(props ){
        super(props)
       
    }
    
    render=() =>{
       
        return (
            <> 
            
                <h1> User Profile update </h1>
                <div className="container"> 
                {/*<div> {this.props.useremail}</div>*/}
                    <Formik initialValues={{}} onSubmit={this.submithanlde} validate={this.validate} enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="preferredjob" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="password" component="div>" className="alert alert-warning"></ErrorMessage>
                                  
                                    <fieldset className="form-group">
                                        <label>Preferred Job</label>
                                        <Field className="form-control" type="text" name="preferredjob" onChange={this.handleChange}></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>preferred Company:     </label>
                                        <Field className="form-control" type="password" name="preferredcompany" onChange={this.handleChange}></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Skills:     </label>
                                        <Field className="form-control" type="password" name="skills" onChange={this.handleChange}></Field>
                                    </fieldset>
                                    <legend className="form-group">
                                        <label>Years of Experience:     </label>
                                        <Field className="form-control" type="password" name="skills" onChange={this.handleChange}></Field>
                                    </legend>

                                    

                                    <fieldset className="form-group">
                                        <button className="btn btn-success btn-lg  " type="button">Update</button>
                                    </fieldset>



                                </Form>)

                        }


                    </Formik>
                    Thank you for using our Application  <div></div>
                    <div></div>
            </div>
            </>
        )
    }
    validate = (values) => {
        let errors = {}
        if (!values.preferredjob) {
            errors.useremail = 'Required'
        } else if (!values.preferredcompany) {
            errors.description = 'Required'
        }

        return errors

    }
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })
    }
}
export default UserProfile
