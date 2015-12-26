import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:posts', 'Unit | Controller | posts', {});

test('should update A and B on setProps action', function(assert) {
  assert.expect(4);

  const ctrl = this.subject();

  // before
  assert.equal(ctrl.get('propA'), 'You need to write tests', 'propA initialized');
  assert.equal(ctrl.get('propB'), 'And write one for me too', 'propB initialized');

  // trigger the action
  ctrl.send('setProps', 'Testing Rocks!');

  // after
  assert.equal(ctrl.get('propA'), 'Testing is cool', 'propA updated');
  assert.equal(ctrl.get('propB'), 'Testing Rocks!', 'propB updated');
});
