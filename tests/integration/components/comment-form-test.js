import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: true
});

test('should trigger external action on form submit', function(assert) {
  assert.expect(1);

  // external action
  this.on('externalAction', function(actual) {
    const expected = { comment: 'You are not a wizard!' };
    assert.deepEqual(actual, expected, 'submitted value is passed to external action');
  });

  this.render(hbs`{{comment-form submitComment=(action 'externalAction')}}`);

  // fill out the form and force an onchange
  this.$('textarea').val('You are not a wizard!');
  this.$('textarea').change();

  // click the button to submit the form
  this.$('input').click();
});
