import axios from 'axios'
import store from '@/store/index'

const config = {
    baseURL: 'http://localhost:2056/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
}

const instance = axios.create(config)

instance.interceptors.request.use(function (config) {
    const token = store.getters.getJWToken

    if(token) config.headers.Authorization = token

    return config
})

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

export default instance