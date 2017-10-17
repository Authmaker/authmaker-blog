import Ember from 'ember';
import Config from 'authmaker-blog/config/environment';

export default Ember.Controller.extend({
    actions: {
        login() {
          return this.get('session').authenticate('authenticator:authmaker', Config.authmaker);
        }
      }
});
