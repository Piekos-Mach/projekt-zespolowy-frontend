<template>
  <v-card
    elevation="24"
    width="700"
  >
    <v-card-title>LOGIN</v-card-title>
		
    <v-card-text>
      <v-row>
        <v-input>
          <v-col>
            <v-text-field
              placeholder="Login"
              id="login"
            />

            <v-text-field
              placeholder="Password"
              id="password"
              type="password"
            />
          </v-col>
        </v-input>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn>Login</v-btn>
    </v-card-actions>
    <router-link to="register">
      <v-card-text>Don't have an account? Register here.</v-card-text>
    </router-link>
  </v-card>
</template>

<script>
export default {
    
}
</script>