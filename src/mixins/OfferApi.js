import backendAPI from './backendAPI'
import store from '../store'

const baseUrl = '/offers'

async function getOfferBcf() {
    return backendAPI.get(baseUrl + '/bcf')
}

async function getOfferBuf(params) {
    return backendAPI.get(baseUrl + '/buf', {
        params: { ...params }
    })
}

async function getOfferView(params) {
    return backendAPI.get(baseUrl + '/rv', {
        params: { ...params }
    })
}

async function getOfferPage(page, size, query) {
    return backendAPI.get(baseUrl + '/rpv', {
        params: { 
            page: page,
            size: size,
            ...query
        }
    })
}

async function getOfferViewL(params) {
    return backendAPI.get(baseUrl + '/rvl', {
        params: params
    })
}

async function getOfferLazyPage(page, size, query) {
    return backendAPI.get(baseUrl + '/rpvl', {
        params: {
            page: page,
            size: size,
            ...query
        }
    })
}

async function deleteOffer(params) {
    return backendAPI.post(baseUrl + '/d', params)
}

async function createOffer(params) {
    return backendAPI.post(baseUrl, {...params, owner: store.state.user.id})
}

 function updateOffer(params) {
    return backendAPI.put(baseUrl, {...params})
}

export default {
    getOfferLazyPage,
    getOfferBcf,
    getOfferBuf,
    getOfferPage,
    getOfferView,
    deleteOffer,
    createOffer,
    getOfferViewL,
    updateOffer
}