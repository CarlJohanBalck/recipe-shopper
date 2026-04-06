import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../api/client";

export function useRecipes(params: {
  search?: string;
  helg?: string;
  page?: number;
}) {
  return useQuery({
    queryKey: ["recipes", params],
    queryFn: () => fetchRecipes({ ...params, limit: 20 }),
  });
}
