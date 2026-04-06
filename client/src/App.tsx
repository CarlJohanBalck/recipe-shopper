import { useState, useCallback } from "react";
import { useRecipes } from "./hooks/useRecipes";
import { useShoppingList } from "./hooks/useShoppingList";
import { useSelection } from "./context/SelectionContext";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import RecipeGrid from "./components/RecipeGrid";
import RecipeDetail from "./components/RecipeDetail";
import SelectionBar from "./components/SelectionBar";
import ShoppingList from "./components/ShoppingList";
import type { ShoppingListResponse } from "../../shared/types";

type View = "recipes" | "shopping";

export default function App() {
  const [search, setSearch] = useState("");
  const [helg, setHelg] = useState("");
  const [page, setPage] = useState(1);
  const [detailId, setDetailId] = useState<number | null>(null);
  const [view, setView] = useState<View>("recipes");
  const [shoppingData, setShoppingData] = useState<ShoppingListResponse | null>(null);

  const { selected } = useSelection();
  const { data, isLoading } = useRecipes({ search, helg, page });
  const shoppingMutation = useShoppingList();

  const handleSearch = useCallback((v: string) => {
    setSearch(v);
    setPage(1);
  }, []);

  const handleFilter = useCallback((v: string) => {
    setHelg(v);
    setPage(1);
  }, []);

  const handleGenerate = () => {
    shoppingMutation.mutate(Array.from(selected), {
      onSuccess: (data) => {
        setShoppingData(data);
        setView("shopping");
      },
    });
  };

  if (view === "shopping" && shoppingData) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8">
        <ShoppingList data={shoppingData} onBack={() => setView("recipes")} />
      </div>
    );
  }

  const totalPages = data ? Math.ceil(data.total / 20) : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-900">Receptväljaren</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <SearchBar value={search} onChange={handleSearch} />
            </div>
            <FilterBar value={helg} onChange={handleFilter} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 pb-24">
        {data && (
          <p className="text-sm text-slate-400 mb-4">
            {data.total} recept {search && `för "${search}"`}
          </p>
        )}

        <RecipeGrid
          recipes={data?.recipes ?? []}
          isLoading={isLoading}
          onDetail={setDetailId}
        />

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-2 rounded-lg text-sm border border-slate-200 disabled:opacity-30 hover:bg-white transition"
            >
              Föregående
            </button>
            <span className="text-sm text-slate-500 px-3">
              Sida {page} av {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-2 rounded-lg text-sm border border-slate-200 disabled:opacity-30 hover:bg-white transition"
            >
              Nästa
            </button>
          </div>
        )}
      </main>

      <SelectionBar onGenerate={handleGenerate} isGenerating={shoppingMutation.isPending} />

      {detailId !== null && (
        <RecipeDetail recipeId={detailId} onClose={() => setDetailId(null)} />
      )}
    </div>
  );
}
