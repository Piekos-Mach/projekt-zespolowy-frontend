export default {
    methods: {
        initials(name) {
            return name.split(' ').reduce((prev, cur) => prev + cur.charAt(0).toUpperCase(), '')
        }
    }
}