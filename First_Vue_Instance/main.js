/*
Vue.js allows us to build "reactive" applications. This means that when an
instance is created all the properties defined inside the data object are added
to Vue's reactivity system. Vue's reactivity system will constantly monitor the
properties defined and if one of them changes it will update the view.

Every Vue.js application starts by creating a new Vue instance which is
the root of the application itself. (Root Vue instance)

We start by creating a variable named 'app' (by convention) and instantiating
it to a new Vue object with properties.

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
        value: 5
    }
})