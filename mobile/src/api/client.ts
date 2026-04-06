import type {
  RecipesResponse,
  RecipeDetail,
  ShoppingListResponse,
} from "./types";

// When running on a physical device, replace with your machine's local IP
// e.g. "http://192.168.1.100:4000"
// On iOS simulator, localhost works fine
const BASE = "http://192.168.0.64:4000/api";

export function setApiBase(url: string) {
  Object.defineProperty(module, "_base", { value: url });
}

function getBase() {
  return BASE;
}

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
  const res = await fetch(`${getBase()}/recipes?${q}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}

export async function fetchRecipeDetail(id: number): Promise<RecipeDetail> {
  const res = await fetch(`${getBase()}/recipes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch recipe");
  return res.json();
}

export async function fetchShoppingList(
  recipeIds: number[]
): Promise<ShoppingListResponse> {
  const res = await fetch(`${getBase()}/shopping-list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recipeIds }),
  });
  if (!res.ok) throw new Error("Failed to generate shopping list");
  return res.json();
}
