import { useMutation } from "@tanstack/react-query";
import { fetchShoppingList } from "../api/client";

export function useShoppingList() {
  return useMutation({
    mutationFn: (recipeIds: number[]) => fetchShoppingList(recipeIds),
  });
}
