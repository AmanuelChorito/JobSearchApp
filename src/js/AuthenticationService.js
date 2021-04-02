class AuthenticationService{

    registerSuccessfulLogin(useremail, role){
        sessionStorage.setItem('authenticatedUser', useremail)
      sessionStorage.setItem('userrole',role)
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

    

}

export default new AuthenticationService()