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
          :rules="titleRules"
          label="Title"
          required
        />

        <v-textarea
          v-model="offer.text"
          :rules="textRules"
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
      <ImagesForm v-if="offer.images"
        :images="offer.images"
        @updateImgs="updateImgs"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn @click="submit">Submit</v-btn>
      <v-btn @click="clear" class="mr-2">Clear</v-btn>
      <Confirm button="Delete" text="Are you sure you want to delete this offer" :func="deleteOffer"/>
      <v-btn @click="() => $router.back()">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ImagesForm from './ImagesForm'
import Confirm from '@/components/Confirm'
import forms from '@/mixins/forms'
import OfferApi from '@/mixins/OfferApi'
export default {
  name: 'OfferForm',
  components: { ImagesForm, Confirm },
  mixins: [ forms ],
  data() {
    return {
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
    req.then(res => {
      this.offer = res.data
      this.offer.images = this.offer.images.map(img => img.content)
      this.offer.price.currency = 1
    })
  },
  methods: {
    updateImgs(e) {
      this.newimages = [...e]
      // BUG ?! length sie nie updatuje 
      // sprawdzic czy dane beda odpowiednio zupdatowane
      // console.log(e.length)
      // console.log(this.newimages)
      // console.log(this.newimages.length)
    },
    submit() {
      const newOffer = {
        ...this.offer, 
        images: this.newimages.length > 0 ? this.newimages : this.offer.images,
      }
      let req
      if(this.$route.params.id) {
        req = OfferApi.updateOffer(newOffer)
      } else {
        req = OfferApi.createOffer(newOffer)
      }
      req.then( () => this.$router.back() )
    },
    clear() {
      OfferApi.getOfferBcf().then(res => this.offer = res.data)
    },
    deleteOffer() {
      OfferApi.deleteOffer({id: this.$route.params.id})
        .then( () => this.$router.back() )
    }
  }
}
</script>