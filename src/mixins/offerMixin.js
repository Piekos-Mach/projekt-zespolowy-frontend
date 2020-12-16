import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getOfferById', 'getImgById']),
        offer() {
            console.log(this.$route.params.id)
            return this.getOfferById(this.$route.params.id)
        },
        images() {
            return this.offer.images.map(img => this.getImgById(img))
        }
    }
}