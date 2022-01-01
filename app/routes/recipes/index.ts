import Route from '@ember/routing/route';
import fetch from 'fetch';
export default class RecipesIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model() {
    return fetch('https://eye-and-palate.firebaseapp.com').then(function(response) {
      return response.json();
    });
  }
}
