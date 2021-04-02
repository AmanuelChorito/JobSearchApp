import React, { Component } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import  LoginComponent from './LoginComponent.jsx'
import { withRouter } from 'react-router-dom';
class UserProfile extends Component {
    constructor(props ){
        super(props)
       
    }
    
    render=() =>{
       
        return (
            <> 
            
                <h1>you are here to User Profile update </h1>
                <div className="container"> <div> {this.props.useremail}</div>
                    Thank you for using our Application  <div></div>
                    <div></div>
            </div>
            </>
        )
    }
    
}
export default UserProfile
