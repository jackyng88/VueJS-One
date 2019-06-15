/*
Vue directives - 

v-for = This directive is used for rendering a list of items based on an array.
        Works similar to Python where when iterating through a list in Python it would
        look something like (for user in users: ). With v-for it would look like
        <li v-for="user in users">{{ user }}</li>

        Important Note - 
        Most of the time when using v-for like in this context, it's better to pass a
        key attribute to Vue.js so that it can keep track of all the node it's creating.
        Since we have a field like 'id' it is a perfect value to pass to key.
        :key="user.id" which is a v-bind.

*/


var app = new Vue ({
    el: "#app",
    data: {
        users: [{
            id: 123,
            name: "luffy",
            power: "rubber man"
        },
        {
            id: 124,
            name: "zoro",
            power: "three swords style"
        },
        {
            id: 125,
            name: "nami",
            power: "climatact"
        },
        {
            id: 126,
            name: "sanji",
            power: "kicks"
        },
        {
            id: 127,
            name: "chopper",
            power: "cute reindeer"
        }]
    }
})

"luffy", "zoro", "nami", "sanji", "chopper"