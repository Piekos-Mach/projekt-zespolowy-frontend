<template>
    <v-card min-width="400">
        <v-card-title v-if="register">Register</v-card-title>
        <v-card-title v-else>Edit User</v-card-title>

        <v-card-text>
            <v-form v-model="valid" v-if="user">
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="First Name"
                    required
                />

                <v-text-field
                    v-model="lastname"
                    label="Last Name"
                />

                <v-text-field
                    v-model="user.mail"
                    :rules="emailRules"
                    label="Email"
                    required
                />

                <v-text-field
                    v-if="!register"
                    v-model="user.oldPassword"
                    :rules="passwordRules"
                    label="Old Password"
                    type="password"
                    required
                />

                <v-text-field
                    v-model="user.newPassword"
                    :rules="passwordRules"
                    type="password"
                    label="New Password"
                    required
                />

                <v-text-field
                    v-model="repeatPassword"
                    :rules="[...passwordRules, passwordConfirmationRule]"
                    label="Confirm Password"
                    type="password"
                    required
                />
            </v-form>
        </v-card-text>

    <v-divider />

    <v-card-actions>
        <v-btn @click="submit">Submit</v-btn>
        <v-btn @click="clear" class="mr-2">Clear</v-btn>
        <Confirm v-if="!register" button="Delete" text="Are you sure you want to delete this offer" :func="deleteUser"/>
        <v-btn @click="() => $router.back()">Cancel</v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
import Confirm from '@/components/Confirm'
import UserApi from '@/mixins/UserApi'
import forms from '@/mixins/forms'
export default {
    name: 'UserForm',
    mixins: [forms],
    components: { Confirm },
    data() {
        return {
            firstname: '',
            lastname: '',
            user: {
                id: '',
                name: '',
                newPassword: '',
                oldPassword: '',
                mail: ''
            },
            register: this.$route.path.includes('register')
        }
    },
    mounted() {
        if(!this.register) {
            UserApi.getUserBuf({ id: this.$route.params.id })
                .then(res => {
                    this.user = res.data
                    this.firstname = this.user.name.split(' ')[0]
                    this.lastname = this.user.name.split(' ')[1] || ''
                    this.user.oldPassword = ''
                    this.user.newPassword = ''
                })
        }
    },
    watch: {
        firstname(val) {
            this.user.name = (val + ' ' + this.lastname).trim()
        },
        lastname(val) {
            this.user.name = (this.firstname + ' ' + val).trim()
        }
    },
    methods: {
        submit() {
            if(this.register) {
                const newUser = {
                    name: this.user.name,
                    mail: this.user.mail,
                    password: this.user.newPassword
                }
                UserApi.createUser(newUser)
                    .then( () => this.$router.push('/login') )
                    .catch(err => alert(err))
            } else {
                UserApi.updateUser(this.user)
                    .then( () => {
                        this.$store.commit('logout')
                        this.$router.push('/login')
                    })
                    .catch(err => alert(err))
            }
        },
        clear() {
            this.user = {
                id: '',
                name: '',
                newPassword: '',
                oldPassword: '',
                mail: ''
            }
        },
        deleteUser() {
            UserApi.deleteUser({ id: this.$route.params.id })
                .then( () => this.$router.back() )
        }
    }
}
</script>