<template>
    <v-card min-width="400">
        <v-card-title v-if="this.$route">New Offer</v-card-title>

        <v-card-text>
            <v-form v-model="valid">
                <v-text-field
                    v-model="title"
                    :counter="20"
                    label="Title"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="text"
                    :counter="200"
                    label="Description"
                    required
                ></v-textarea>

                <v-text-field
                    v-model="price"
                    type="number"
                    label="Price"
                    :rules="priceRules"
                    required
                ></v-text-field>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text><ImagesForm/></v-card-text>

        <v-card-actions>
            <v-btn>Submit</v-btn>
            <v-btn>Clear</v-btn>
            <v-btn @click="() => this.$router.back()">Cancel</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import ImagesForm from './ImagesForm'
export default {
    name: 'OfferForm',
    components: { ImagesForm },
    data() {
        return {
            valid: false,
            title: '',
            titleRules: [
                v => !!v || 'Title is required!',
                v => v.length <= 20 || 'Title must be shorter than 20 characters!'
            ],
            text: '',
            textRules: [
                v => !!v || 'Description is requred!',
                v => v.length <= 200 || 'Description must be shorter than 200 characters!'
            ],
            price: 0,
            priceRules: [
                v => !!v || 'Price is required!',
                v => !Number.isNaN(v) || 'Must be a number!',
                v => v >= 0 || 'Price must not be a negative number!'
            ],
            currency: '',
        }
    }
    
}
</script>