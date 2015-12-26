import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:comments', 'Unit | Controller | comments', {
  needs: ['controller:post']
});

test('should modify the post model', function(assert) {
  assert.expect(2);

  // grab an instance of 'CommentsController' and 'PostController'
  const ctrl = this.subject();
  const postCtrl = ctrl.get('post');

  // async functions
  Ember.run(function() {

    // set a generic model on the post controller
    postCtrl.set('model', Ember.Object.create({ title: 'foo' }));

    // check the values before
    assert.equal(ctrl.get('title'), 'foo', 'title is set');

    // modify the title
    postCtrl.get('model').set('title', 'bar');

    // assert that the controllers title has changed
    assert.equal(ctrl.get('title'), 'bar', 'title is updated');
  });
});
