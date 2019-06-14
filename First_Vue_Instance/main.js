/*
Vue.js allows us to build "reactive" applications. This means that when an
instance is created all the properties defined inside the data object are added
to Vue's reactivity system. Vue's reactivity system will constantly monitor the
properties defined and if one of them changes it will update the view.

Every Vue.js application starts by creating a new Vue instance which is
the root of the application itself. (Root Vue instance)

We start by creating a variable named 'app' (by convention) and instantiating
it to a new Vue object with properties.

Vue HTML file specific directives - 
v-text = can be used in a similar fashion to just header tag with mustache sytnax.

v-bind = One of the ways to bind various objects with Vue.

Note - As a short-hand you can forego using v-bind on something like 
<img v-bind:src="imgSrc" alt=""> by just doing <img :src="imgSrc" alt="">
This works with <a href> </> also.

Options -
    el - Element. Expects as it's value a CSS selector pointing to our HTML
         element in our page where we want to mount our instance. For example
         it will look at the div tag with id=#app

    data - Inside data we define all the data properties that we want to use
           with our application.

*/

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        value: 5,
        imgSrc: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2119,x_0,y_95/f_auto,q_auto,w_1100/v1554922320/shape/mentalfloss/549058-istock-471884456.jpg",
        link: "https://vuejs.org"
    }
})