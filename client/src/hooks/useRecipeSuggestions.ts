import { useQuery } from "@tanstack/react-query";
import { fetchRecipeSuggestions } from "../api/client";

export function useRecipeSuggestions(ingredientIds: number[]) {
  return useQuery({
    queryKey: ["suggestions", ingredientIds],
    queryFn: () => fetchRecipeSuggestions(ingredientIds),
    enabled: ingredientIds.length > 0,
  });
}
