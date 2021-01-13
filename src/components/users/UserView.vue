<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <v-col cols="1">
                            <v-avatar
                                rounded
                                color="warning lighten-2"
                                size="41"
                            >
                                {{ initials(user.name) }}
                            </v-avatar>
                        </v-col>
                        <v-col cols="10">User details</v-col>
                        <v-col cols="1">
                            <v-btn :to="`/users/edit/${user.id}`">
                                Edit
                            </v-btn>
                        </v-col>
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon>mdi-account</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-title>
                                    {{user.name}}
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon>mdi-email</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-title>
                                    {{user.mail}}
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon>mdi-cog</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-title>
                                    {{user.type.name}}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-divider></v-divider>
        
        <v-row>
            <v-col cols="12">
                <OfferList :ownerId="user.id"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import OfferList from '@/components/offers/OfferList'
import { mapState } from 'vuex'
import initials from '@/mixins/initials'
export default {
    name: 'UserView',
    components: { OfferList },
    mixins: [initials],
    computed: mapState(['user'])
}
</script>