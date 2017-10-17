import Ember from 'ember';
import AuthmakerLoginRoute from 'authmaker-ember-simple-auth/mixins/login-route';
import Config from 'authmaker-blog/config/environment'

export default Ember.Route.extend(AuthmakerLoginRoute, {
    config: Config.authmaker,
});
