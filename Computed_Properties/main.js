/*
Computed Properties -
Computed properties are similar to methods and the biggest difference between them is that
computed properties cache the result of the processing and keeps reusing that same result until
the values they've used have changed. When calling a computed property, even though we define 
it like a method/function when calling it in the HTML file it is without (). For example
{{ getRandomComputed }} is correct and not {{ getRandomComputed() }}


*/

var app = new Vue ({
    el: "#app",
    data : {
        first_name: "Luffy D.",
        last_name: "Monkey"
    },
    computed: {
        getRandomComputed() {
            return Math.random();
        },
        
        fullName() {
            return `${ this.first_name } ${ this.last_name }`;
        },
        reversedFullName() {
            first = this.first_name.split("").reverse().join("");
            last = this.last_name.split("").reverse().join("");
            return `${ first } ${ last }`;
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    }
})