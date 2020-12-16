<template>
    <v-card outlined>
        <v-card-actions>
            <v-btn text @click="() => this.$router.back()">Go back</v-btn>
            <router-link :to="'/offer/edit/'+this.offer.id">
                <v-btn>Edit</v-btn>
            </router-link>
        </v-card-actions>
        <v-card-title>{{this.offer.title}}</v-card-title>

        <v-card-text>
            <v-row justify="center">
                <v-img max-height="300" max-width="300" :src="this.images[imgNo-1]">
                    <v-pagination v-model="imgNo" :length="this.offer.images.length"/>
                    <!-- SLIDE GROUPS OR CAROUSELS -->
                </v-img> 
            </v-row>
        </v-card-text>
        <v-card-text>{{this.offer.text}}</v-card-text>
        <v-card-text>{{this.offer}}</v-card-text>
    </v-card>
</template>

<script>
import offerMixin from '@/mixins/offerMixin'
export default {
    name: 'OfferView',
    mixins: [offerMixin],
    data() {
        return {
            imgNo: 1
        }
    }
}
</script>