import backendAPI from './backendAPI'

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

async function deleteOffer(params) {
    return backendAPI.post(baseUrl + '/d', params)
}

async function createOffer(params) {
    console.log(params)
    return backendAPI.post(baseUrl, {...params, owner: 1})
}

 function updateOffer(params) {
     console.log(params)
    return backendAPI.put(baseUrl, params)
}

export default {
    getOfferBcf,
    getOfferBuf,
    getOfferPage,
    getOfferView,
    deleteOffer,
    createOffer,
    updateOffer
}