import Ember from 'ember';

export default Ember.Component.extend({
  comment: '',

  actions: {
    submitAction() {
      this.attrs.submitComment({ comment: this.get('comment') });
    }
  }
});
