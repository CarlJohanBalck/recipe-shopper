import type { RecipeSummary } from "../../../shared/types";
import RecipeCard from "./RecipeCard";

interface Props {
  recipes: RecipeSummary[];
  isLoading: boolean;
  onDetail: (id: number) => void;
}

export default function RecipeGrid({ recipes, isLoading, onDetail }: Props) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm animate-pulse">
            <div className="aspect-[4/3] bg-slate-200" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-3/4" />
              <div className="h-3 bg-slate-100 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-20 text-slate-400">
        <svg className="h-16 w-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-lg font-medium">Inga recept hittades</p>
        <p className="text-sm mt-1">Prova att ändra din sökning</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} onDetail={onDetail} />
      ))}
    </div>
  );
}
