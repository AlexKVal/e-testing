import { moduleFor, test } from 'ember-qunit';

let originalAlert;

moduleFor('route:application', 'Unit | Route | application', {
  beforeEach() {
    originalAlert = window.alert; // store original function
  },

  afterEach() {
    window.alert = originalAlert; // restore original
  }
});

test('should display an alert', function(assert) {
  assert.expect(2);

  // instance of the route
  let route = this.subject();

  // stub window.alert to perform a qunit test
  const expectedTextFoo = 'foo';
  window.alert = (text) => {
    assert.equal(text, expectedTextFoo, `expect alert to display ${expectedTextFoo}`);
  };

  // trigger the test above
  route._displayAlert(expectedTextFoo);

  // set up a second stub to perform a test with the actual action
  const expectedTextBar = 'bar';
  window.alert = (text) => {
    assert.equal(text, expectedTextBar, `expect alert to display ${expectedTextBar}`);
  };

  // now trigger the test by the actual action
  route.send('displayAlert', expectedTextBar);
});
