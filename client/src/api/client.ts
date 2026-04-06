import type {
  RecipesResponse,
  RecipeDetail,
  ShoppingListResponse,
  IngredientsResponse,
  RecipeSuggestionsResponse,
} from "../../../shared/types";

const BASE = "/api";

export async function fetchRecipes(params: {
  search?: string;
  helg?: string;
  page?: number;
  limit?: number;
}): Promise<RecipesResponse> {
  const q = new URLSearchParams();
  if (params.search) q.set("search", params.search);
  if (params.helg) q.set("helg", params.helg);
  if (params.page) q.set("page", String(params.page));
  if (params.limit) q.set("limit", String(params.limit));
  const res = await fetch(`${BASE}/recipes?${q}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}

export async function fetchRecipeDetail(id: number): Promise<RecipeDetail> {
  const res = await fetch(`${BASE}/recipes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch recipe");
  return res.json();
}

export async function fetchIngredients(): Promise<IngredientsResponse> {
  const res = await fetch(`${BASE}/ingredients`);
  if (!res.ok) throw new Error("Failed to fetch ingredients");
  return res.json();
}

export async function fetchRecipeSuggestions(
  ingredientIds: number[]
): Promise<RecipeSuggestionsResponse> {
  const q = new URLSearchParams({ ingredientIds: ingredientIds.join(",") });
  const res = await fetch(`${BASE}/recipes/suggestions?${q}`);
  if (!res.ok) throw new Error("Failed to fetch suggestions");
  return res.json();
}

export async function fetchShoppingList(
  recipeIds: number[]
): Promise<ShoppingListResponse> {
  const res = await fetch(`${BASE}/shopping-list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recipeIds }),
  });
  if (!res.ok) throw new Error("Failed to generate shopping list");
  return res.json();
}
