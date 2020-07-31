import axios from 'axios'  
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // 跨域请求是否发送coolkie 
    // timeout: 5000
})

service.interceptors.request.use(
    config => { 
        return config
    },
    error => { 
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response 
    },
    error => { 
        return Promise.reject(error)
    }
)

export default service 