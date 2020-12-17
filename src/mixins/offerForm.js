import { offerWithImages } from './offersMixins'
export default {
    data() {
        return {
            valid: false,
            titleRules: [
                v => !!v || 'Title is required!',
                v => v.length <= 20 || 'Title must be shorter than 20 characters!'
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
            newimages: []
        }
    },
    ...offerWithImages      
}