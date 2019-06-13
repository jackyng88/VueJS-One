/* 
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
        message: 'Hello World!'
    }
})