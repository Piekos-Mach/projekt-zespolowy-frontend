<template>
  <v-app>
    <NavBar/>
    <AppBar/>

    <v-main>
      <v-container>
        <v-row justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import AppBar from './components/AppBar'
export default {
  name: 'App',
  components: {
    NavBar,
    AppBar
  },
  data: () => ({
    //
  }),
  created() {
    
  }
};
</script>
