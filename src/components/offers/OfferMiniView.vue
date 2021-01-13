<template>
  <v-card>
    <v-row dense>
      <v-col cols="2">
        <v-card-text>
          <v-img
            max-width="100"
            max-height="100"
            :src="offer.image.content"
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
export default {
    name: 'OfferMiniView',
    mixins: [initials],
    props: { offer: Object },
}
</script>