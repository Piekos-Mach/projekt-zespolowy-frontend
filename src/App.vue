<template>
  <v-app>
    <Menu/>
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

      <v-spacer></v-spacer>

      <router-link to="login">
        <v-btn text>
          <span class="mr-2">Login</span>
        </v-btn>
      </router-link>
    </v-app-bar>


    <v-main>
        <v-content >
          <v-container>
        <router-view></router-view>
          </v-container>
        </v-content>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({
    //
  }),

  created() {
    
  }
};
</script>
