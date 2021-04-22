import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Saapadu oh',
      'Nalla irukkum',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [new Ingredient('Egg', 2), new Ingredient('Meat', 3)]
    ),
    new Recipe(
      'Burger Oh',
      'Sumaarah irukkum',
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Tomato', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
