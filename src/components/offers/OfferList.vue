<template>
  <v-row>
    <SearchBar>
      <v-card flat>
        <v-card-subtitle>Page Size</v-card-subtitle>
        <v-card-text>
          <v-chip-group column mandatory v-model="pageSize" active-class="warning" @change="getOffers">
            <v-chip filter v-for="size in sizes" :key="size">{{size}}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </SearchBar>

    <v-toolbar floating v-if="totalPages > 0">
      <v-pagination :length="totalPages" v-model="page" @input="getOffers"/>
    </v-toolbar>

    <v-list>
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
  </v-row>
</template>

<script>
import OfferMiniView from './OfferMiniView'
import SearchBar from './SearchBar'
import OfferApi from '@/mixins/OfferApi'
export default {
    name: 'OfferList',
    components: { OfferMiniView, SearchBar },
    props: ['ownerId'],
    data() {
        return {
            offers: [],
            sizes: [5, 10, 15, 25, 50, 100],
            totalPages: 0,
            pageSize: 0, 
            page: 1,
            searchQuery: {}
        }
    },
    mounted() { this.getOffers(); console.log(this.searchQuery) },
    watch: {
      $route(to) {
        this.searchQuery = to.query
        console.log(to.query)
        this.getOffers()
      }
    },
    methods: {
      getOffers() {
        let query = {}
        if(this.searchQuery.type) query.type = this.searchQuery.type
        if(this.ownerId) query.owner = this.ownerId
        OfferApi.getOfferLazyPage(this.page, this.sizes[this.pageSize], query)
          .then(res => {
            this.offers = res.data.content,
            this.totalPages = res.data.totalPages
            if(this.page > this.totalPages) {
              this.page = this.totalPages
              this.getOffers()
            }
            this.filterOffers()
          })
      },
      filterOffers() {
        this.offers = this.offers
          .filter(offer => this.searchQuery.title    ? offer.title.includes(this.searchQuery.title)    : true)
          .filter(offer => this.searchQuery.minPrice ? offer.price.value >= this.searchQuery.minPrice  : true)
          .filter(offer => this.searchQuery.maxPrice ? offer.price.value <= this.searchQuery.maxPrice  : true)
          .filter(offer => this.searchQuery.dateFrom ? offer.creationDate >= this.searchQuery.dateFrom : true)
          .filter(offer => this.searchQuery.dateTo   ? offer.creationDate <= this.searchQuery.dateTo   : true)
        // this.totalPages = Math.floor(this.offers.length / this.sizes[this.pageSize])
        console.log(this.totalPages)
      }
    }
}
</script>