/*
Vue directives - 

v-model = The v-model directive allow us to create two-way data bindings to allow us to
          get input from the user such as form input, text area, etc. 

          This two-way binding means that it allows us o bind the properties of our data object
          and the inputs in our HTML pages. 

          Note - Typically when pressing publish or some such all the data of the form
          would be sent to the backend or the URL defined in the action attribute. However
          Single Page Applications (SPAs) work differently. Once the page is loaded the first time
          you never want your page to refresh again to keep the UX at it's best. In a 
          Single Page application Javascript will be responsible for handling all the user input
          sending it to the REST API backend when needed. Using Vue.js we can now wait for
          the submit event of the form itself and we can then call an appropriate method to handle
          the data. 

@submit-prevent = Reminder that the symbol '@' is a v-on shorthand. Syntatically this is
                  equivalent to v-on:submit.prevent. The .prevent is to prevent the normal
                  submit behavior which is to send the contents of a form or whatever to an 
                  action property and would cause the page to refresh.


*/

var app = new Vue ({
    el: "#app",
    data: {
        comment: null,
        comments: [],
        errors: null
    },
    methods: {
        onSubmit() {
            if (this.comment) {
                let new_comment = this.comment;
                this.comments.push(new_comment);
                this.comment = null;

                if (this.errors) {
                    this.errors = null;
                }
            }
            else {
                this.errors = "The comment field can't be empty!";
            }
        }
    }

})