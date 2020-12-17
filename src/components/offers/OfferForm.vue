<template>
    <v-card min-width="400">
        <v-card-title v-if="this.$route.path.includes('new')">New Offer</v-card-title>
        <v-card-title v-else>Edit Offer</v-card-title>

        <v-card-text>
            <v-form v-model="valid">
                <v-text-field
                    v-model="offer.title"
                    :counter="20"
                    label="Title"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="offer.text"
                    :counter="200"
                    label="Description"
                    required
                ></v-textarea>

                <v-text-field
                    v-model="offer.price"
                    type="number"
                    label="Price"
                    :rules="priceRules"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
            <ImagesForm :images="this.images" @updateImgs="updateImgs"/>
        </v-card-text>

        <v-card-actions>
            <v-btn>Submit</v-btn>
            <v-btn>Clear</v-btn>
            <v-btn @click="() => this.$router.back()">Cancel</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import ImagesForm from './ImagesForm'
import offerForm from '@/mixins/offerForm'
export default {
    name: 'OfferForm',
    components: { ImagesForm },
    mixins: [ offerForm ],
    methods: {
        updateImgs(e) {
            this.newimages = [...e]
            // BUG ?! length sie nie updatuje
            // console.log(e.length)
            // console.log(this.newimages)
            // console.log(this.newimages.length)
        }
    }
}
</script>