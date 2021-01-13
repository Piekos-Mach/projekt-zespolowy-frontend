const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
export default {
    data() {
        return {
            valid: false,
            titleRules: [
                v => !!v || 'Title is required!',
                v => v.length <= 20 || 'Title must be shorter than 20 characters!',
                v => v.length >= 4 || 'Title must be longer than 3 characters!'
            ],
            textRules: [
                v => !!v || 'Description is requred!',
                v => v.length <= 200 || 'Description must be shorter than 200 characters!'
            ],
            priceRules: [
                v => !!v || 'Price is required!',
                v => !Number.isNaN(v) || 'Must be a number!',
                v => v >= 0 || 'Price must not be a negative number!'
            ],
            nameRules: [
                v => !!v || 'Name is required!',
                v => v.length <= 30 || 'Name must be shorter than 30 characters!',
                v => v.length >= 2 || 'Name must be at least 2 characers!'
            ],
            emailRules: [
                v => !!v || 'Email is required!',
                v => emailRegex.test(v) || 'Email has to be in correct format!'
            ],
            passwordRules: [
                v => !!v || 'Password is required!',
                v => v.length >= 6 || 'Password must have at least 6 characters!',
                v => v.length <= 30 || 'Password must have maximum of 30 characters!'
            ],
            passwordConfirmationRule: v => v == this.user.newPassword || 'Passwords must match!',
            repeatPassword: '',
        }
    }
}