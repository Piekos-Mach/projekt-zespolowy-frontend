<template>
  <div>
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

    <v-pagination :length="totalPages" v-model="page" @input="getOffers"/>

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
  </div>
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
    mounted() { this.getOffers() },
    watch: {
      $route(to) {
        this.searchQuery = to.query
        this.getOffers()
      }
    },
    methods: {
      getOffers() {
        if(this.ownerId) this.searchQuery.owner = this.ownerId
        OfferApi.getOfferPage(this.page, this.sizes[this.pageSize], this.searchQuery)
          .then(res => {
            this.offers = res.data.content,
            this.totalPages = res.data.totalPages
            if(this.page > this.totalPages) {
              this.page = this.totalPages
              this.getOffers()
            }
          })
      }
    }
}
</script>