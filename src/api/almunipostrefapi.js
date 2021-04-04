import axios from "axios"
import { Component } from "react";

class Almunipostrefapi {

    // getuserDetail(emailaddress, password) {// get user and user role to show view accordingly
    //     return axios.put(`http://localhost:3000/${emailaddress}`)//, emailaddress,password);
    // }


    postref(description, referral) {// get user and user role to show view accordingly
      const data={description:description, referrral:referral}
      
        return axios.post(`http://localhost:3000/postreferral`, {data})
    }
    
    getrefpost(){
      return axios.get(`http://localhost:3000/postreferrral`)
       
    }

}



export default new Almunipostrefapi()