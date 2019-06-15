/*
Vue directives - 

v-bind = We can use v-bind for styling purposes as well. v-bind:style allows us
         to specify various properties like color, pixel width, etc. We can use
         v-bind:style explicity v-bind:style= "{ backgroundColor: 'green', border: '5px solid orange' }"
         with something like a div tag or we can denote it within the data field of our
         Vue app variable inside a 'styleObject' property.

*/

var app = new Vue({
    el: "#app",
    data: {
        flag: true,
        styleObject: { 
            backgroundColor: 'green', 
            border: '5px solid orange' 
        }
    },
    methods: {
        changeShape() {
            this.flag = !this.flag;
            
        }
    }

})