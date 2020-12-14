<template>
    <v-card outlined>
        <v-card-title>{{this.offer.title}}</v-card-title>

        <v-card-text>
            <v-img src="@/assets/logo.png"/>
        </v-card-text>
        <v-card-text>{{this.offer}}</v-card-text>

        
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OfferView',
    computed: {
        ...mapGetters(['getOfferById']),
        offer() {
            console.log(this.$route.params.id)
            return this.getOfferById(this.$route.params.id)
        }
    }
}
</script>