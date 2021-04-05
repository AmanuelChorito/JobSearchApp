import axios from "axios"
import { Component } from "react";

class loginapi   {

    // getuserDetail(emailaddress, password) {// get user and user role to show view accordingly
    //     return axios.put(`http://localhost:3000/${emailaddress}`)//, emailaddress,password);
    // }

    
     getuserDetailpost(emailaddress, password) {// get user and user role to show view accordingly
        const logindetail={email: emailaddress, pas: password}
       // let basicAuthHeader=' Bearer'+ window.btoa(emailaddress+":"+password)
         return axios.post(`http://localhost:3000/api/login`,logindetail)
        }
}
export default new loginapi()