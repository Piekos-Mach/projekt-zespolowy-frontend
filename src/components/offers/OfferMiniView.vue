<template>
  <v-card>
    <v-row dense>
      <v-col cols="2">
        <v-card-text>
          <v-img
            width="100"
            height="100"
            :src="image || ''"
          />
        </v-card-text>
      </v-col>
      <v-col cols="8">
        <v-card-title>{{ offer.title }}</v-card-title>
        <v-card-subtitle>Created: {{ offer.creationDate.split("T")[0] }}</v-card-subtitle>
        <v-card-text>{{ offer.text.substring(0,200) + (offer.text.length > 200 ? '...' : '')}}</v-card-text>
      </v-col>
      <v-col cols="2" align-self="center">
        <v-card-text>
          Price: {{ offer.price.value }} {{ offer.price.currency.name }}
        </v-card-text>
        <v-card-text>
          <router-link :to="'/users/view/' + offer.owner.id" >
          <v-avatar
            rounded
            color="warning lighten-2"
            size="41"
          >
            {{ initials(offer.owner.name) }}
          </v-avatar>
          </router-link>
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