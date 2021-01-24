<template>
  <div class="home">
    <v-row justify="center">
      <v-card min-width="500">
        <v-card-title>
          <v-row justify="center">
            Welcome in Bo-Rd Application
          </v-row>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <v-row justify="center">
            Here you can search for other users offers or create your own
          </v-row>

          <v-row justify="center">
            <router-link to="/offers">
              <v-btn text>Go to Offers</v-btn>
            </router-link>
          </v-row>
        </v-card-text>
      </v-card>

    </v-row>
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
