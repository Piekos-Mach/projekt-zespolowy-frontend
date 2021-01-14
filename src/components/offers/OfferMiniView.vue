<template>
  <v-card>
    <v-row dense>
      <v-col cols="2">
        <v-card-text>
          <v-img
            v-if="image"
            max-width="100"
            max-height="100"
            :src="image"
          />
        </v-card-text>
      </v-col>
      <v-col>
        <v-card-title>{{ offer.title }}</v-card-title>
        <v-card-text>{{ offer.text }}</v-card-text>
      </v-col>
      <v-col cols="2">
        <v-card-text>
          {{ offer.price.value }} {{ offer.price.currency.name }}
        </v-card-text>
        <v-card-text>
          <v-avatar
            rounded
            color="warning lighten-2"
            size="41"
          >
            {{ initials(offer.owner.name) }}
          </v-avatar>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import initials from '@/mixins/initials'
import ImageApi from '@/mixins/ImageApi'
export default {
    name: 'OfferMiniView',
    mixins: [initials],
    props: { offer: Object },
    data() {
      return {
        image: undefined
      }
    },
    mounted() { this.getMiniature() },
    updated() { this.getMiniature() },
    methods: {
      getMiniature() {
        if(this.offer.miniature) {
          ImageApi.getImg(this.offer.miniature)
            .then(res => this.image = res.data.content)
        }
      }
    }
}
</script>