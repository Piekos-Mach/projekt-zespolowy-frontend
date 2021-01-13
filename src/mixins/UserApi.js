import backendAPI from './backendAPI'

const baseUrl = '/users'

function getUserBuf(params) {
    return backendAPI.get(baseUrl + '/buf', {
        params: { ...params }
    })
}

function getUserBcf() {
    return backendAPI.get(baseUrl + '/bcf')
}

function getUserView(params) {
    return backendAPI.get(baseUrl + '/rv', {
        params: params
    })
}

function deleteUser(params) {
    return backendAPI.post(baseUrl + '/d', params)
}

function createUser(params) {
    console.log(params)
    return backendAPI.post(baseUrl, params)
}

function updateUser(params) {
    return backendAPI.put(baseUrl, params)
}

function login(username, password) {
    return backendAPI.post('/login', {
        username: username,
        password: password
      })
}

export default {
    getUserBcf,
    getUserBuf,
    getUserView,
    deleteUser,
    updateUser,
    createUser,
    login
}