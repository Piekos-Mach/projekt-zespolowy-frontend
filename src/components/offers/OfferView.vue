<template>
  <v-card outlined>
    <v-card-actions>
      <v-btn text @click="() => $router.back()">
        Go back
      </v-btn>
      <div v-if="$store.state.user && offer.owner">
        <v-btn v-if="$store.state.user.id == offer.owner.id" :to="'/offer/edit/'+offer.id">Edit</v-btn>
      </div>
    </v-card-actions>
    <v-card-title>
      <span>
        {{ offer.title }}
      </span>
      <v-spacer></v-spacer>
      <span v-if="offer.price">
        {{ offer.price.value }} {{ offer.price.currency.name }}
      </span>
    </v-card-title>

    <v-divider></v-divider>
    <v-card-text v-if="images">
      <v-row justify="center">
        <v-img
          height="300"
          width="300"
          :src="images[imgNo-1]"
        >
          <v-pagination
            v-model="imgNo"
            :length="images.length"
          />
          <!-- SLIDE GROUPS OR CAROUSELS -->
        </v-img> 
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>{{ offer.text }}</v-card-text>
    <v-divider></v-divider>
    <v-card-text ><UserMiniView v-if="offer.owner" :user="offer.owner">Offer Owner</UserMiniView></v-card-text>
  </v-card>
</template>

<script>
import OfferApi from '@/mixins/OfferApi'
import ImageApi from '@/mixins/ImageApi'
import UserMiniView from '@/components/users/UserMiniView'
export default {
    name: 'OfferView',
    components: { UserMiniView },
    data() {
        return {
            imgNo: 1,
            offer: {},
            images: undefined
        }
    },
    mounted() {
      OfferApi.getOfferViewL({id: this.$route.params.id})
        .then(res => {
          this.offer = res.data
          this.images = []
          this.offer.images.forEach(img => {
            ImageApi.getImg(img)
              .then(res => this.images.push(res.data.content))
          });
        })
    }
}
</script>