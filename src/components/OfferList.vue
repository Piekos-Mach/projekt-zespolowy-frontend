<template>
    <v-row justify="center">
        <v-list>
            <v-subheader>Offers</v-subheader>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
                <OfferView/>
            </v-list-item>
        </v-list>
    </v-row>
</template>

<script>
import OfferView from './OfferView'
export default {
    data: () => ({
        items: 5
    }),
    components: {
        OfferView
    }
}
</script>