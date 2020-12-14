<template>
    <v-list>
        <v-subheader>Offers</v-subheader>
        <v-list-item
            v-for="(item, i) in offers"
            :key="i"
        >
            <router-link tag="div" :to="'/offer/view/'+item.id">
                <OfferMiniView :offer="item"/>
            </router-link>
        </v-list-item>
    </v-list>
</template>

<script>
import { mapState } from 'vuex'
import OfferMiniView from './OfferMiniView'

export default {
    name: 'OffersList',
    components: {
        OfferMiniView
    },
    computed: {
        ...mapState(['offers'])
    }
}
</script>