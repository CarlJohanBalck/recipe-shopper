import { useState, useMemo } from "react";
import { useIngredients } from "../hooks/useIngredients";
import { useRecipeSuggestions } from "../hooks/useRecipeSuggestions";
import type { Ingredient, RecipeSuggestion } from "../../../shared/types";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";

interface Props {
  onBack: () => void;
}

const MAX_UNFILTERED = 60;

export default function IngredientSuggestions({ onBack }: Props) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [detailId, setDetailId] = useState<number | null>(null);

  const { data: ingredientsData, isLoading: loadingIngredients } = useIngredients();
  const selectedIds = useMemo(() => Array.from(selected), [selected]);
  const { data: suggestionsData, isLoading: loadingSuggestions } = useRecipeSuggestions(selectedIds);

  const allIngredients = ingredientsData?.ingredients ?? [];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allIngredients.slice(0, MAX_UNFILTERED);
    return allIngredients.filter((i) => i.name.toLowerCase().includes(q));
  }, [allIngredients, search]);

  const selectedIngredients = useMemo(
    () => allIngredients.filter((i) => selected.has(i.id)),
    [allIngredients, selected]
  );

  function toggle(ing: Ingredient) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(ing.id)) next.delete(ing.id);
      else next.add(ing.id);
      return next;
    });
  }

  const suggestions = suggestionsData?.recipes ?? [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tillbaka
            </button>
            <div className="w-px h-5 bg-slate-200" />
            <h1 className="text-xl font-bold text-slate-900">Hitta recept</h1>
          </div>

          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Sök ingredienser..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="lg:flex lg:gap-8">
          {/* Left: Ingredient picker */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-[105px]">
              {/* Selected chips */}
              {selectedIngredients.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Valda ({selectedIngredients.length})
                    </span>
                    <button
                      onClick={() => setSelected(new Set())}
                      className="text-xs text-slate-400 hover:text-slate-600 transition"
                    >
                      Rensa alla
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedIngredients.map((ing) => (
                      <button
                        key={ing.id}
                        onClick={() => toggle(ing)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition"
                      >
                        {ing.name}
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredient list */}
              <div className="mb-6 lg:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Ingredienser
                  </span>
                  {!search && allIngredients.length > MAX_UNFILTERED && (
                    <span className="text-xs text-slate-400">
                      Visar {MAX_UNFILTERED} av {allIngredients.length}
                    </span>
                  )}
                </div>

                {loadingIngredients ? (
                  <div className="flex justify-center py-8">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
                  </div>
                ) : filtered.length === 0 ? (
                  <p className="text-sm text-slate-400 py-4">Inga ingredienser hittades</p>
                ) : (
                  <div className="flex flex-wrap gap-2 lg:max-h-[calc(100vh-320px)] lg:overflow-y-auto lg:pr-1">
                    {filtered.map((ing) => {
                      const isSelected = selected.has(ing.id);
                      return (
                        <button
                          key={ing.id}
                          onClick={() => toggle(ing)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                            isSelected
                              ? "bg-emerald-500 text-white shadow-sm"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
                          }`}
                        >
                          {ing.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Recipe suggestions */}
          <div className="flex-1 lg:border-l lg:border-slate-200 lg:pl-8">
            {selectedIds.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-slate-500 font-medium">Välj ingredienser</p>
                <p className="text-slate-400 text-sm mt-1">Recept som matchar visas här</p>
              </div>
            ) : loadingSuggestions ? (
              <div className="flex justify-center py-20">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
              </div>
            ) : suggestions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-slate-500 font-medium">Inga recept hittades</p>
                <p className="text-slate-400 text-sm mt-1">Prova andra ingredienser</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-slate-400 mb-4">
                  {suggestions.length} recept matchar dina ingredienser
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                  {suggestions.map((recipe) => (
                    <SuggestionCard
                      key={recipe.id}
                      recipe={recipe}
                      onDetail={setDetailId}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {detailId !== null && (
        <RecipeDetail recipeId={detailId} onClose={() => setDetailId(null)} />
      )}
    </div>
  );
}

function SuggestionCard({
  recipe,
  onDetail,
}: {
  recipe: RecipeSuggestion;
  onDetail: (id: number) => void;
}) {
  return (
    <div className="relative">
      <RecipeCard recipe={recipe} onDetail={onDetail} />
      <div className="absolute bottom-[52px] left-3 right-3 pointer-events-none">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-600/90 text-white text-xs font-semibold backdrop-blur-sm">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {recipe.match_count} {recipe.match_count === 1 ? "ingrediens" : "ingredienser"}
        </span>
      </div>
    </div>
  );
}
