import axios from "axios"
import { Component } from "react";

class signup {

    // getuserDetail(emailaddress, password) {// get user and user role to show view accordingly
    //     return axios.put(`http://localhost:3000/${emailaddress}`)//, emailaddress,password);
    // }


    getuserDetailpost(data) {// get user and user role to show view accordingly
        console.log("signup api"+ data.name)
        
 const detail={
            "password": "password3",

                "email": "mmm@email.com",

                    "role": {

                "name": "Nicolas Cage",

                    "telephoneNumber": "+1 412-452-6235",

                        "address": "Los Angeles",

                            "roleName": "ALUMNI",

                                "currentJob": "Senior Software Engineer",

                                    "currentCompany": "TeleSign"

            }
        }

        
        //const logindetail = { email: emailaddress, pas: password ,userrole:role}
        return axios.post(`http://localhost:9099/api/signup`, detail)
    }
}
export default new signup()