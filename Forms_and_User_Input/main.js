/*
Vue directives - 

v-model = The v-model directive allow us to create two-way data bindings to allow us to
          get input from the user such as form input, text area, etc. 

          This two-way binding means that it allows us o bind the properties of our data object
          and the inputs in our HTML pages. 


*/

var app = new Vue ({
    el: "#app",
    data: {
        color: 'green'
    }

})