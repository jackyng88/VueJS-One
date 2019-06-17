/*
Vue Components and Props - 

Components = Allow us to divide apps into reusable 'blocks of code' and within the components
             we can write both Javascript logic and HTML code. Usually by defining them within
             the template property of a component.

             Most Vue (and other JS framework) applications can be broken down into a combination
             of various components. Components can be nested within other components. 

             Components allow us to keep our code ordered and maintainable and allowing us
             the ability to create large scale projects easily. 

Props =     A special type of attribute that we use to pass data between parent and child components.
            When a value is passed from one component to another via Prop, it becomes a property of
            the component instance to which it has been passed.

            Note - If you're planning to use any prop with your component you will need to register
            the props that you intend to use. This way the component will expect those props and 
            you will actually be able to use them within the components themselves.

*/

Vue.component("comment", {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    template: ` 
        <div>
            <div class="card-body">
                <p>{{ comment.username }}</p>
                <p>{{ comment.content }}</p>
            </div>
            <hr>
        </div>
    `
})


var app = new Vue ({
    el: "#app",
    data: {
        comments: [
            { username: 'Luffy', content: 'Pirate King'},
            { username: 'Zoro', content: 'World\'s Greatest Swordsman'},
            { username: 'Nami', content: 'Thieving Navigator'},
            { username: 'Sanji', content: 'Raging Cook'}
        ]
    }
})