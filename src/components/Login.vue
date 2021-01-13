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
              placeholder="Username"
              id="username"
              v-model="username"
            />

            <v-text-field
              placeholder="Password"
              id="password"
              type="password"
              v-model="password"
            />

          </v-col>
        </v-input>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="login">Login</v-btn>
    </v-card-actions>
    <router-link to="register">
      <v-card-text>Don't have an account? Register here.</v-card-text>
    </router-link>
  </v-card>
</template>

<script>
import UserAPI from '@/mixins/UserApi'
import { mapMutations } from 'vuex'
export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        UserAPI.login(this.username, this.password)
          .then(res => {
            this.setJWToken(res.headers.authorization)
            UserAPI.getUserView({id: res.headers.userid})
              .then(res => this.setUser(res.data))
            this.$router.push('/')
          })
          .catch(err => {
            alert(err)
          })

      },
      ...mapMutations(['setJWToken', 'setUser'])
    }
}
</script>

