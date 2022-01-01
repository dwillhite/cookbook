import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recipes/recipes.index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:recipes/recipes.index');
    assert.ok(route);
  });
});
