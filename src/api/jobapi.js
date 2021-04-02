import axios from "axios"
class jobapi{

    retrieveAllTodos(position, place){
        position='Software Engineer'
        const appid = 'e65a5991';
        const appkey = '30db8006e07f475468d2d3c859990da8'
      //  const logindetail = { email: emailaddress, pas: password }
      
       // return axios.get(`http://api.adzuna.com/v1/api/jobs/us/search/10?app_id=e65a5991&app_key=30db8006e07f475468d2d3c859990da8&results_per_page=10&what=Software%20Engineer%20&where=usa`)
        return axios.get(`http://localhost:3000/results?what=$"position`)
    }
    
}

export default new jobapi()