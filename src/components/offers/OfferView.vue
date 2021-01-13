<template>
  <v-card outlined>
    <v-card-actions>
      <v-btn
        text
        @click="() => $router.back()"
      >
        Go back
      </v-btn>
      <router-link :to="'/offer/edit/'+offer.id">
        <v-btn>Edit</v-btn>
      </router-link>
    </v-card-actions>
    <v-card-title>{{ offer.title }}</v-card-title>

    <v-card-text v-if="offer.images">
      <v-row justify="center">
        <v-img
          v-if="offer.images.length > 0"
          max-height="300"
          max-width="300"
          :src="offer.images[imgNo-1].content"
        >
          <v-pagination
            v-model="imgNo"
            :length="offer.images.length"
          />
          <!-- SLIDE GROUPS OR CAROUSELS -->
        </v-img> 
      </v-row>
    </v-card-text>
    <v-card-text>{{ offer.text }}</v-card-text>
    <v-card-text>{{ offer.owner }}</v-card-text>
  </v-card>
</template>

<script>
import OfferApi from '@/mixins/OfferApi'
export default {
    name: 'OfferView',
    data() {
        return {
            imgNo: 1,
            offer: {}
        }
    },
    mounted() {
      OfferApi.getOfferView({id: this.$route.params.id})
        .then(res => this.offer = res.data)
    }
}
</script>