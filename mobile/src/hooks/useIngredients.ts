import { useQuery } from "@tanstack/react-query";
import { fetchIngredients } from "../api/client";

export function useIngredients() {
  return useQuery({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
    staleTime: Infinity,
  });
}
