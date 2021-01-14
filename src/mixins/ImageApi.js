import backendAPI from './backendAPI'

const baseUrl = '/images'

async function getImg(id) {
    return backendAPI.get(baseUrl + '/rv', {
        params: {
            id: id
        }
    })
}

async function getOfferImgs(offerId) {
    return backendAPI.get(baseUrl + '/rlv', {
        params: {
            offer: offerId
        }
    })
}

export default {
    getImg,
    getOfferImgs
}