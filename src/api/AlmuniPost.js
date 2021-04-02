import axios from "axios"
import { Component } from "react";

class AlmuniPost  {

    postReferral(useremail, post) {// get almuni post
        const refpost={useremail,post}
        return axios.post('http://localhost:8080/postjob/referal', refpost);
    }
    postJob(useremail,post) {// get almuni post
        const jobpost = { useremail, post }
        return axios.post('http://localhost:8080/postjob/joblink',jobpost);
    }
}
export default new AlmuniPost()