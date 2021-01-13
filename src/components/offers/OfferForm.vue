<template>
  <v-card min-width="400">
    <v-card-title v-if="$route.path.includes('new')">
      New Offer
    </v-card-title>
    <v-card-title v-else>
      Edit Offer
    </v-card-title>

    <v-card-text>
      <v-form v-model="valid" v-if="offer">
        <v-text-field
          v-model="offer.title"
          :counter="20"
          label="Title"
          required
        />

        <v-textarea
          v-model="offer.text"
          :counter="200"
          label="Description"
          required
        />

        <v-text-field
          v-model="offer.price.value"
          type="number"
          label="Price"
          :rules="priceRules"
          required
        />
      </v-form>
    </v-card-text>

    <v-divider />

    <v-card-text>
      <ImagesForm v-if="offer"
        :images="offer.images"
        @updateImgs="updateImgs"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn @click="submit">Submit</v-btn>
      <v-btn @click="clear">Clear</v-btn>
      <Confirm button="Delete" text="Are you sure you want to delete this offer" :func="deleteOffer"/>
      <v-btn @click="() => $router.back()">
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ImagesForm from './ImagesForm'
import Confirm from '@/components/Confirm'
import offerForm from '@/mixins/offerForm'
export default {
    name: 'OfferForm',
    components: { ImagesForm, Confirm },
    mixins: [ offerForm ],
    methods: {
        updateImgs(e) {
            this.newimages = [...e]
            // BUG ?! length sie nie updatuje 
            // sprawdzic czy dane beda odpowiednio zupdatowane
            // console.log(e.length)
            // console.log(this.newimages)
            // console.log(this.newimages.length)
        }
    }
}
</script>