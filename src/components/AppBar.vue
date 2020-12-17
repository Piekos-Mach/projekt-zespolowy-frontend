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

		<router-link v-if="this.$route.path.includes('offers')" to="/offer/new">
			<v-btn text>
				<span class="mr-2">New Offer</span>
			</v-btn>
		</router-link>

		<v-spacer></v-spacer>

		<v-btn text disabled v-if="isGuest">
			<span class="mr-2 text--disabled">Guest</span>
		</v-btn>
		<router-link to="login" v-if="isGuest">
			<v-btn text>
				<span class="mr-2">Login</span>
			</v-btn>
		</router-link>
	</v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'AppBar',
	computed: mapState(['isGuest']),
}
</script>