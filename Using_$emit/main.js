/*
$emit - 
Allows the ability for a child component to interact with it's parent component, 
thus giving them the ability to call methods and pass values.


Note -

The 'data' property inside a component behaves differently than from data inside
a new Vue object that we have used previously. A reason why we need to use a function
inside of our components is so that each and every component instance is going to have
it's own data. This way we can reuse the same component as many times as we need.


*/
// Comment List component
Vue.component("comment-list", {
    /*
    Considering that the single comment component requires a comment as prop, which
    is an object, our comment-list component is going to require a comments array as prop,
    so that it can then pass single objects to our single comment.
    */
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            new_comment: null,
            comment_author: null,
            error: null
        }
    },
    methods: {
        submitComment() {
            if (this.comment_author && this.new_comment) {    
                this.$emit('submit-comment', {username: this.comment_author, 
                    content: this.new_comment})
                this.new_comment = null;
                this.comment_author = null;
                
                if (this.error) {
                    this.error = null;
                }
            }
            else {
                this.error = "Please fill out both fields!";
            }
        }
    },
    template: `
        <div class="mt-2">
            <div class="container">

                <single-comment 
                    v-for="(comment,index) in comments" 
                    :comment="comment"
                    :key="index">
                </single-comment>

                <hr>

                <h3>{{ error }}</h3>

                <form @submit.prevent="submitComment" class="mb-3">
                    <label for="commentAuthor">Your Username</label>
                    <div class="form-group">
                        <input class="form-control"
                            id="commentAuthor"
                            type="text"
                            v-model="comment_author">
                        </input>
                    </div>

                    <label for="commentText">Add a Comment</label>
                    <div class="form-group">
                        <textarea class="form-control"
                                id="commentText"
                                rows="3"
                                cols="40"
                                v-model="new_comment">
                        </textarea>
                    </div>

                    <button class="btn btn-sm btn-primary"
                            type="submit">
                            Publish
                    </button>
                </form>
            </div>
        </div>
    `
})


// Single comment Component
Vue.component("single-comment", {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    template: ` 
        <div class="mb-2">
            <div class="card">
                <div class="card-header">
                    <p>Published by: {{ comment.username }}</p>
                </div>
                <div class="card-body">
                    <p>{{ comment.content }}</p>
                </div>
            </div>
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
    },
    methods: {
        addNewComment(new_comment) {
            this.comments.push(new_comment)
        }
    }
})