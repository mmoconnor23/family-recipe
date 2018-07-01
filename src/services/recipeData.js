/* eslint class-methods-use-this: 0 */

import { sortBy } from 'lodash';
import * as axios from 'axios';

class RecipeData {
  constructor() {
    this.categories = [
      {
        display: 'Appetizer',
        value: 'appetizer',
      }, {
        display: 'Dessert',
        value: 'dessert',
      }, {
        display: 'Pasta',
        value: 'pasta',
      }, {
        display: 'Soup',
        value: 'soup',
      }, {
        display: 'Casserole',
        value: 'casserole',
      }, {
        display: 'Sandwich',
        value: 'sandwich',
      }, {
        display: 'Entree (other)',
        value: 'entree',
      },
    ];
  }

  getCategories() {
    return this.categories;
  }

  getRecipes() {
    const url = 'https://vegapie-recipe-server.herokuapp.com/all';
    // const url = 'http://localhost:8081/all';
    return axios.get(url).then(response => sortBy(response.data, 'title'));
  }
}

/* eslint-disable */
export let recipeData = new RecipeData();
