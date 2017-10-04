import Ember from 'ember';

export default Ember.Controller.extend({

    title: '',
    body: '',

    hasError: null,

    actions: {
        createPost() {
            let title = this.get('title');
            let body = this.get('body');
            
            let newPost = this.get('store').createRecord('post', {
                title,
                body
            });

            newPost.save().then(() => {

                this.setProperties({
                    title: '',
                    body: ''
                });
                this.transitionToRoute('posts');
            }).catch((error) => {
                this.set('hasError', error);
                newPost.rollbackAttributes();
            });
        }
    }
});
