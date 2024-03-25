import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";



@Injectable()

export class RecipeService {
   recipesChanged = new Subject <Recipe[]>();

   // private recipes: Recipe[] = [
   //    new Recipe(
   //       'Burger',
   //       'A true classic. Juicy beef cutlet with signature BBQ sauce, lettuce, vegetables and Cheddar cheese.',
   //       'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRRto3IlY56MlAIOAvXHvPEVxBDVzG1uz1zULEBYdJ-I4Aa-xOyPEVvv7fmIjLnxaOz',
   //       [
   //          new Ingredient('Buns', 2),
   //          new Ingredient('Meat', 1)
   //       ]),
   //    new Recipe(
   //       'Schnitzel',
   //       'Schnitzel is a traditional dish of Austrian cuisine, self-sufficient and laconic, while having a delicious taste on its own, and in combination with a suitable side dish, it is ideal for a holiday lunch or family dinner.',
   //       'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/05/thumb-1200x675.jpg',
   //       [
   //          new Ingredient('Meat', 1),
   //          new Ingredient('French Fries', 20)
   //       ])
   // ];

   private recipes: Recipe[] = [];

   constructor(private slService: ShoppingListService) { }

   setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
   }

   getRecipe(index: number) {
      return this.recipes[index];
   }

   getRecipes() {
      return this.recipes.slice();
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
   }

   deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
   }
}