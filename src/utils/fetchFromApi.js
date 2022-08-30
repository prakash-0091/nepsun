import axios from 'axios'

const BASE_URL = 'https://api.qfxcinemas.com/api/public'

const options = {
    params:{

    },
    headers:{
//        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    }
}



export const fetchFromAPI = async (url) =>{
   const res = await axios.get(`${BASE_URL}/${url}`)

   if(res.status === 200 ){
        return res.data.data
    }
    else{
        return res.status
    }
    
}

