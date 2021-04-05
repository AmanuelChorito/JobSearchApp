import axios from "axios"
import { Component } from "react";

class Almunipostjobapi {

    // getuserDetail(emailaddress, password) {// get user and user role to show view accordingly
    //     return axios.put(`http://localhost:3000/${emailaddress}`)//, emailaddress,password);
    // }


    postjob(desc, url) {// get user and user role to show view accordingly
    const  data={description: desc, address:url}
        return axios.post(`http://localhost:8080/postjob/referral`, { data })
    }

    getjobpost() {
        return axios.get(`http://localhost:3000/postreferrral`)

    }

}



export default new Almunipostjobapi()