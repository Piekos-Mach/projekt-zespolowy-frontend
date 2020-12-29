import { mapGetters, mapState } from 'vuex'
import axios from 'axios'

const apiURL = 'https://localhost:2056/api'

export {
    offerWithImages,
    offerWithMainImage,
    allOffers
}

// const offerWithImages = {
//     computed: {
//         ...mapGetters(['getOfferById', 'getImgById']),
//         offer() {
//             let temp = this.getOfferById(this.$route.params.id)
//             return temp ? temp : undefined
//         },
//         images() {
//             return this.offer.images.map(img => this.getImgById(img))
//         }
//     }
// }

const offerWithImages = {
    computed: {
        offer() {
            axios.get(apiURL+'/offers/rv', {
                params: {
                    id: this.$route.params.id
                }
            })
        }
    }
}

const offerWithMainImage = {
    computed: {
        ...mapGetters(['getOfferById', 'getImgById']),
        offer() {
            return this.getOfferById(this.$route.params.id)
        },
        image() {
            return this.getImgById(this.offer.images[0])
        }
    }
}

const allOffers = {
    computed: {
        ...mapState(['offers'])
    }
}