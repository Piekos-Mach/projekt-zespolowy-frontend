<template>
    <v-card>
        <v-row dense>
            <v-col cols="2">
                <v-card-text>
                    <v-img max-width="100" max-height="100" :src="offer.image.content"/>
                </v-card-text>
            </v-col>
            <v-col>
                <v-card-title>{{offer.title}}</v-card-title>
                <v-card-text>{{offer.text}}</v-card-text>
            </v-col>
            <v-col cols="2">
                <v-card-text>
                    {{offer.price.value}} {{offer.price.currency.name}}
                </v-card-text>
                <v-card-text>
                    <v-avatar rounded color="warning lighten-2" size="41">
                        {{initials}}
                    </v-avatar>
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'OfferMiniView',
    props: ['offer'],
    computed: {
        initials() {
            return this.offer.owner.name.split(' ').reduce((prev, cur) => prev + cur.charAt(0).toUpperCase(), '')
        }
    }
}
</script>