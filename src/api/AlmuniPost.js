import axios from "axios"
import { Component } from "react";

class AlmuniPost  {

    getuserDetail() {// get almuni post
        return axios.post('http://localhost:8082/login');
    }
}
export default new AlmuniPost()