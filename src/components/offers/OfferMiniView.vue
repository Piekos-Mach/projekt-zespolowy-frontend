<template>
    <v-card>
        <v-row dense>
            <v-col cols="2">
                <v-card-text>
                    <v-img max-width="100" max-height="100" :src="this.img"/>
                </v-card-text>
            </v-col>
            <v-col cols="9">
                <v-card-title>{{this.offer.title}}</v-card-title>
                <v-card-text>{{this.offer.text}}</v-card-text>
            </v-col>
            <v-col>
                <v-card-text>
                    {{this.offer.price.value}} {{this.offer.price.currency}}
                </v-card-text>
                <v-card-text>
                    <v-avatar rounded color="warning lighten-2" size="41">
                        {{this.initials}}
                    </v-avatar>
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OfferMiniView',
    props: ['offer'],
    computed: {
        ...mapGetters(['getImgById']),
        img() {
            return this.getImgById(this.offer.images[0])
        },
        initials() {
            return this.offer.owner.name.split(' ').reduce((prev, cur) => prev + cur.charAt(0).toUpperCase(), '')
        }
    }
}
</script>