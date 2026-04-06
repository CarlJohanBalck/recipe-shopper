import type { ShoppingListResponse } from "./api/types";

export type RootStackParamList = {
  Recipes: undefined;
  RecipeDetail: { id: number };
  ShoppingList: { data: ShoppingListResponse };
  IngredientSuggestions: undefined;
};
