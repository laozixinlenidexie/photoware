import axios from "axios"

const mockrequests=axios.create({
    baseURL:"/mock",
    timeout:'5000'
})

mockrequests.interceptors.request.use((config) =>{
    return config;
})
mockrequests.interceptors.response.use((res)=>{
    return res.data;
},()=>{
    return Promise.reject(new Error('fale'));
})

export default mockrequests