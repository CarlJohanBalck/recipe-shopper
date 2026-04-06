import type { RecipeSummary } from "../../../shared/types";
import { useSelection } from "../context/SelectionContext";

interface Props {
  recipe: RecipeSummary;
  onDetail: (id: number) => void;
}

export default function RecipeCard({ recipe, onDetail }: Props) {
  const { selected, toggle } = useSelection();
  const isSelected = selected.has(recipe.id);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm border-2 transition-all hover:shadow-md cursor-pointer ${
        isSelected
          ? "border-emerald-500 ring-2 ring-emerald-200"
          : "border-transparent"
      }`}
      onClick={() => onDetail(recipe.id)}
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        {recipe.image_url ? (
          <img
            src={recipe.image_url}
            alt={recipe.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle(recipe.id);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? "bg-emerald-500 text-white scale-110"
              : "bg-white/80 backdrop-blur text-slate-400 opacity-0 group-hover:opacity-100 hover:bg-white hover:text-emerald-600"
          }`}
        >
          {isSelected ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </button>
        {recipe.helg && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 text-xs font-medium">
            Helg
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 text-sm leading-tight line-clamp-2">
          {recipe.name}
        </h3>
        {recipe.total_price > 0 && (
          <p className="mt-1 text-xs text-slate-400">{recipe.total_price} kr</p>
        )}
      </div>
    </div>
  );
}
