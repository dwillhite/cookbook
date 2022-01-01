import Controller from '@ember/controller';

export default class RecipesIndex extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  get test() {
    return this.model;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'recipes/index': RecipesIndex;
  }
}
