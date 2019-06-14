/*
Vue Directives - 

v-if and v-else = 

    Used for instance on a h1 tag. You specify a condition for v-if like v-if="auth"
    then right next to it if you call v-else, you don't need to specify a condition.

v-show = 

    Similar to v-if and v-else will allow you to show or entirely omit depending
    on a boolean. For example in <h3 v-show="sale">On Sale!</h3> if we set
    app.sale = false in the console, nothing will show.

*/


var app = new Vue({
    el: '#app',
    data: {
        product: "boomerang",
        quantity: 150,
        sale: true

    }
})