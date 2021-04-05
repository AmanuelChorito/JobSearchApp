
import axios from "axios"

class AuthenticationService{

    registerSuccessfulLogin(useremail,password, role, token){
       
        sessionStorage.setItem('authenticatedUser', useremail)
        sessionStorage.setItem('userrole',role)
       
}
    getuserDetailpost(emailaddress, password) {// get user and user role to show view accordingly

             const data={email:emailaddress, pass:password}
       
         return axios.post(`http://localhost:8080/api/login`,{ data})
        //      headers:{
        //         Authorization: this.reateBasicAuth(emailaddress,password)
        //      }
        //  })
    }
    createBasicAuth(token){
        return 'Bearer'+token
    }

    
logout(){
    sessionStorage.removeItem('authenticatedUser')
}

isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticatedUser')
    if(user===null) return false
    return true
}

getUserLoggedIn() {
    let jobseeker = sessionStorage.getItem('userrole')
    if (jobseeker === false) return false
        return true 
    }
setupAxios(){
    
    const basicAuthHeader = sessionStorage.getItem.authorization('authorization')
    axios.interceptors.request.use(
        function (config) {
            if (this.isUserLoggedIn()) {
                config.headers["authorization"] = basicAuthHeader;
            }
            return config;
        },
        function (err) {
            return Promise.reject(err);
        }
    );

}
    

}

export default new AuthenticationService()