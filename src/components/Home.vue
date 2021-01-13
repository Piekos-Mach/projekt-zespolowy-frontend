<template>
  <div class="home">
    <router-link to="/offers">
      <v-btn>Go to Offers</v-btn>
    </router-link>

    <v-list elevation="2">
      <v-subheader>
    TODO:
      </v-subheader>
      
      <v-list-item>
        token and user data persist in sessionstorage
      </v-list-item>
      <v-list-item>
        fix images in offer form and offer view
      </v-list-item>
      <v-list-item>
        implement lazy and skeleton loader 
      </v-list-item>
      <v-list-item>
        beutify offer view 
      </v-list-item>
      <v-list-item>
        router security 
      </v-list-item>
      <v-list-item>
        add smth on home page 
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
