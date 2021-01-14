<template>
    <div>
        <UserMiniView :user="user">
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
        </UserMiniView>

        <v-divider></v-divider>
        
        <OfferList :ownerId="user.id"/>
    </div>
</template>

<script>
import OfferList from '@/components/offers/OfferList'
import UserMiniView from '@/components/users/UserMiniView'
import { mapState } from 'vuex'
import initials from '@/mixins/initials'
export default {
    name: 'UserView',
    components: { OfferList, UserMiniView },
    mixins: [initials],
    computed: mapState(['user'])
}
</script>