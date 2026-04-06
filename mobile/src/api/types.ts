export interface RecipeSummary {
  id: number;
  name: string;
  image_url: string | null;
  helg: boolean;
  total_price: number;
}

export interface RecipeDetail extends RecipeSummary {
  url: string | null;
  instructions: string | null;
  ingredients: IngredientLine[];
}

export interface IngredientLine {
  ingredient_id: number;
  name: string;
  amount: number;
  unit: string | null;
  category: string | null;
}

export interface ShoppingListItem {
  name: string;
  total_amount: number;
  unit: string | null;
  category: string | null;
}

export interface ShoppingListResponse {
  categories: ShoppingListCategory[];
}

export interface ShoppingListCategory {
  category: string;
  items: ShoppingListItem[];
}

export interface RecipesResponse {
  recipes: RecipeSummary[];
  total: number;
}

export interface Ingredient {
  id: number;
  name: string;
  category: string | null;
}

export interface IngredientsResponse {
  ingredients: Ingredient[];
}

export interface RecipeSuggestion extends RecipeSummary {
  match_count: number;
}

export interface RecipeSuggestionsResponse {
  recipes: RecipeSuggestion[];
}
