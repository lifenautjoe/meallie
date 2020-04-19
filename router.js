import Vue from 'vue';
import Router from 'vue-router';

import MeallieHomePage from "./pages/HomePage/HomePage.vue";
import MeallieMealPage from "./pages/MealPage/MealPage.vue";
import MeallieNotFoundPage from "./pages/NotFoundPage.vue";


Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: "*",
        component: MeallieNotFoundPage
      },
      {
        path: '/',
        component: MeallieHomePage
      },
      {
        path: '/:idMeal',
        component: MeallieMealPage
      }
    ]
  })
}
