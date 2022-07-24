const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        incrementCard(id) {
            this.cart.push(id)
        },
        removeCard(id) {
            let index = this.cart.findIndex(el => el === id)
            this.cart.splice(index, 1)
        }
    }
})
