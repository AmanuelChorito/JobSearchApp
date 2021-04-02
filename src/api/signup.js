import axios from "axios"
import { Component } from "react";

class signup {

    // getuserDetail(emailaddress, password) {// get user and user role to show view accordingly
    //     return axios.put(`http://localhost:3000/${emailaddress}`)//, emailaddress,password);
    // }


    getuserDetailpost(emailaddress, password, role) {// get user and user role to show view accordingly
        const logindetail = { email: emailaddress, pas: password ,role}
        return axios.post(`http://localhost:3000/signup`, logindetail)
    }
}
export default new signup()