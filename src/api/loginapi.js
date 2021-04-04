import axios from "axios"
import { Component } from "react";

class loginapi   {

    // getuserDetail(emailaddress, password) {// get user and user role to show view accordingly
    //     return axios.put(`http://localhost:3000/${emailaddress}`)//, emailaddress,password);
    // }

    
     getuserDetailpost(emailaddress, password) {// get user and user role to show view accordingly
        const logindetail={email: emailaddress, pas: password}
         //return axios.post(`http://localhost:3000/login`, logindetail)
        }
}
export default new loginapi()