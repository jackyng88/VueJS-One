/*
Defining all manners of methods/processes in the HTML is not a great idea,
to remedy that we include a "methods" property within the Vue object.



Vue directives used - 

v-on = Can be used with something like on_click from the DOM. 
       v-on:click would be the equivalent of that.

       Note - Previously we could shorthand the v-bind directive by just having
       a ':' like <img v-bind:src="imgSrc" alt=""> -> just <img :src="imgSrc" alt="">
       But for v-on we can just use '@'. 
       <button v-on:click="counter += 1">Increment ++</button> can be changed to
       <button @click="counter += 1">Increment ++</button>

       1. click 2. mouseover

*/



var app = new Vue({
    el: '#app',
    data: {
        lesson: 'Events and Methods',
        counter: 0
    },
    methods: {
        incrementCounter() {
            this.counter += 1;
            console.log(this.counter);
            if (this.counter === 10) {
                alert("Counter is at 10!");
            }
        },

        overTheBox() {
            console.log("Over the Green Box!");
            
        }
    }
})