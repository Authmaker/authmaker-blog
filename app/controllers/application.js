import Ember from 'ember';
import Config from 'authmaker-blog/config/environment';

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  session: service(),
    actions: {
        login() {
          return this.get('session').authenticate('authenticator:authmaker', Config.authmaker);
        },
        logout() {
          return this.get('session').invalidate();
        }
      }
});
