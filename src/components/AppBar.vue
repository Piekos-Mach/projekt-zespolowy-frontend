<template>
  <v-app-bar
    app
    color="primary"
    dark 
    clipped-left
  >
    <router-link to="/">
      <v-btn text>
        <span class="mr-2">Home</span>
      </v-btn>
    </router-link>

    <router-link
      v-if="user"
      to="/offer/new"
    >
      <v-btn text>
        <span class="mr-2">New Offer</span>
      </v-btn>
    </router-link>

    <v-spacer />

    <router-link :to="!user ? '/register' : `/users/view/${user.id}`">
      <v-btn text>
        <span class="mr-2">{{!user ? 'Guest' : user.name}}</span>
      </v-btn>
    </router-link>

    <router-link
      to="/login"
      v-if="!user"
    >
      <v-btn text>
        <span class="mr-2">Login</span>
      </v-btn>
    </router-link>

    <v-btn text v-else @click="logout">
      <span class="mr-2">Logout</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
	name: 'AppBar',
  computed: mapState(['user']),
  methods: {
    ...mapMutations({userout: 'logout'}),
    logout() {
      this.userout()
      if(this.$route.path != '/') this.$router.push('/')
    }
  }
}
</script>