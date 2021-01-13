<template>
    <div>
        <v-card min-width="80vw">
            <v-card-title>
                <v-avatar
                    rounded
                    color="warning lighten-2"
                    size="41"
                >
                    {{ initials(user.name) }}
                </v-avatar>

                <v-col>User details</v-col>

                <v-btn :to="`/users/edit/${user.id}`">
                    Edit
                </v-btn>
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

        <v-divider></v-divider>
        
        <OfferList :ownerId="user.id"/>
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