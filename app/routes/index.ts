import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service router:any;

  beforeModel(transition: Transition) {
    const firebaseConfig = {
      apiKey: "AIzaSyA0sp4Oa53FZ7PxeVNB8m6qcFh8C7d15s8",
      authDomain: "eye-and-palate.firebaseapp.com",
      projectId: "eye-and-palate",
      storageBucket: "eye-and-palate.appspot.com",
      messagingSenderId: "605619825650",
      appId: "1:605619825650:web:dc3806d7d043b31525d96b",
      measurementId: "G-TW357XGW0Y",
      databaseURL: 'https://eye-and-palate.firebaseapp.com',
    };
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    console.log(transition)
    this.router.transitionTo('recipes.index'); // Implicitly aborts the on-going transition.
    return app;
  }
}
