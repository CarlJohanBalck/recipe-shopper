import { useQuery } from "@tanstack/react-query";
import { fetchRecipeDetail } from "../api/client";
import { useSelection } from "../context/SelectionContext";
import { formatAmount } from "../lib/utils";

interface Props {
  recipeId: number;
  onClose: () => void;
}

export default function RecipeDetail({ recipeId, onClose }: Props) {
  const { selected, toggle } = useSelection();
  const isSelected = selected.has(recipeId);

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => fetchRecipeDetail(recipeId),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading || !recipe ? (
          <div className="p-8 space-y-4 animate-pulse">
            <div className="h-48 bg-slate-200 rounded-xl" />
            <div className="h-6 bg-slate-200 rounded w-3/4" />
            <div className="h-4 bg-slate-100 rounded w-1/2" />
          </div>
        ) : (
          <>
            {recipe.image_url && (
              <img
                src={recipe.image_url}
                alt={recipe.name}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
            )}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900">{recipe.name}</h2>
                <button
                  onClick={onClose}
                  className="shrink-0 p-1 rounded-lg hover:bg-slate-100 text-slate-400"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {recipe.helg && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 text-xs font-medium">
                  Helgrecept
                </span>
              )}

              <div className="mt-5">
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
                  Ingredienser
                </h3>
                <ul className="space-y-1.5">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex justify-between text-sm text-slate-600">
                      <span>{ing.name}</span>
                      <span className="text-slate-400 tabular-nums">
                        {formatAmount(ing.amount)}{" "}
                        {ing.unit || ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {recipe.instructions && (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
                    Instruktioner
                  </h3>
                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                    {recipe.instructions}
                  </p>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => toggle(recipeId)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition ${
                    isSelected
                      ? "bg-red-50 text-red-600 hover:bg-red-100"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {isSelected ? "Ta bort från lista" : "Lägg till i lista"}
                </button>
                {recipe.url && (
                  <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition"
                  >
                    Källa
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
