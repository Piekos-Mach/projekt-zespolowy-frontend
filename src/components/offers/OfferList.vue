<template>
  <v-list>
    <v-subheader>
      <PageControler
        :total-pages="totalPages"
        @changePage="function(event){console.log(event);this.size = event.target.size; this.page = event.target.page; getOffersPage()}"
      />
    </v-subheader>
    <v-list-item
      v-for="(item, i) in offers"
      :key="i"
    >
      <router-link
        tag="div"
        :to="'/offer/view/'+item.id"
      >
        <OfferMiniView :offer="item" />
      </router-link>
    </v-list-item>
  </v-list>
</template>

<script>
import OfferMiniView from './OfferMiniView'
import PageControler from '@/components/PageControler'
import axios from 'axios'
export default {
    name: 'OffersList',
    components: {
        OfferMiniView,
        PageControler
    },
    mounted() {
        this.getOffersPage({})
    },
    data() {
        return {
            offers: [],
            totalPages: 0,
        }
    },
    methods: {
        async getOffersPage(){
            const url = 'http://localhost:2056/api/offers/rpv'
            this.offers = []
            axios.get(url, { 
                params: {
                    size: this.size,
                    page: this.page
                } 
            })
                .then(res => res.data)
                .then(data => {
                    this.totalPages = data.totalPages
                    this.offers = data.content
                    console.log(data)
                })
        }
    }
}
</script>