<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container>
        <v-row justify="center">
          <router-view />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
export default {
  name: 'App',
  components: {
    AppBar
  },
  data: () => ({
    //
  }),
  created() {
    
  }
};
</script>
