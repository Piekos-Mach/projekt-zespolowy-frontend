import OfferApi from './OfferApi'
export default {
    data() {
        return {
            valid: false,
            titleRules: [
                v => !!v || 'Title is required!',
                v => v.length <= 20 || 'Title must be shorter than 20 characters!'
            ],
            textRules: [
                v => !!v || 'Description is requred!',
                v => v.length <= 200 || 'Description must be shorter than 200 characters!'
            ],
            priceRules: [
                v => !!v || 'Price is required!',
                v => !Number.isNaN(v) || 'Must be a number!',
                v => v >= 0 || 'Price must not be a negative number!'
            ],
            newimages: [],
            offer: undefined
        }
    },
    mounted() {
        let req
        if(this.$route.params.id) {
            req = OfferApi.getOfferBuf({id: this.$route.params.id})
        } else {
            req = OfferApi.getOfferBcf()
        }
        req.then(res => {this.offer = res.data})
    },
    methods: {
        submit() {
            const newOffer = {...this.offer, images: this.newimages}
            console.log(newOffer)
            let req
            if(this.$route.params.id) {
                req = OfferApi.updateOffer(newOffer)
            } else {
                req = OfferApi.createOffer(newOffer)
            }
            req.then(res => {
                console.log(res)
                this.$router.back()
            })
        },
        clear() {
            OfferApi.getOfferBcf().then(res => this.offer = res.data)
        },
        deleteOffer() {
            OfferApi.deleteOffer({id: this.$route.params.id})
                .then(res => {
                    console.log(res)
                    this.$router.back()
                })
        }
    }
}