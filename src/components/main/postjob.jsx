import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Almunipostjob from '../../api/almunipostjobapi'
class PostJob extends Component {
    constructor(props) {
        super(props)
       this.state={
            title:'',
            url:''
       }
    }

    render() {
        return (
            <>
                <h3> post new Job</h3>
                <div className="container">
                    <Formik initialValues={{}} onSubmit={this.submithanlde} validate={this.validate} enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="useremail" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="password" component="div>" className="alert alert-warning"></ErrorMessage>
                                   
                                    <fieldset className="form-group">
                                        <label>Job Title: </label>
                                        <Field className="form-control" type="text" name="title" onChange={this.handleChange} required></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>URL:</label>
                                        <Field className="form-control" type="text" name="url" onChange={this.handleChange} required></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <button className="btn btn-success btn-lg  " type="submit">Post</button>
                                    </fieldset>

                                  
                                </Form>)

                        }


                    </Formik>
            </div>
            </>
        )
    }


    submithanlde = () => {

        console.log(this.state.title)
        Almunipostjob.postjob(this.state.title,this.state.url)
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

                    })

                    console.log(Response.data.id)
                    this.props.history.push({ pathname: '/welcome',}) 
                }
            )

           .catch(

               this.setState({ loginstate: false}),
               this.props.history.push('/Login')

           )

      

    }
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })
    }
    
}

export default PostJob
