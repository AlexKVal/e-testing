import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

// Stub location service
const locationStub = Ember.Service.extend({
  city: 'New York',
  country: 'USA',
  currentLocation: {
    x: 123,
    y: 123
  },

  getCurrentCity() {
    return this.get('city');
  },

  getCurrentCountry() {
    return this.get('country');
  }
});

moduleForComponent('location-indicator', 'Integration | Component | location indicator', {
  integration: true,

  beforeEach() {
    this.register('service:location-service', locationStub);

    // for testing
    this.inject.service('location-service', { as: 'locService' });
  }
});

test('should reveal current location', function(assert) {
  this.render(hbs`{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA');
});

test('should change displayed location when current location changes', function(assert) {
  this.render(hbs`{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA');

  this.set('locService.city', 'Beijing');
  this.set('locService.country', 'China');
  this.set('locService.currentLocation', { x: 1, y: 2 });
  assert.equal(this.$().text().trim(), 'You currently are located in Beijing, China');
});
