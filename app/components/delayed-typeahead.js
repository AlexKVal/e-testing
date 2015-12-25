import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleTyping() {
      // the fetchResults function is passed into the component from its parent
      Ember.run.debounce(
        this, // context for function to call
        this.get('fetchResults'), // function to call
        this.get('searchValue'), // attr* for function to call
        250 // ms delay
      );
    }
  }
});
