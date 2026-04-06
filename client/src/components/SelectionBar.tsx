import { useSelection } from "../context/SelectionContext";

interface Props {
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function SelectionBar({ onGenerate, isGenerating }: Props) {
  const { count, clear } = useSelection();

  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
            {count}
          </span>
          <span className="text-sm text-slate-600">
            {count === 1 ? "recept valt" : "recept valda"}
          </span>
          <button
            onClick={clear}
            className="text-xs text-slate-400 hover:text-red-500 transition ml-1"
          >
            Rensa
          </button>
        </div>
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-medium text-sm hover:bg-emerald-700 disabled:opacity-50 transition shadow-sm"
        >
          {isGenerating ? "Genererar..." : "Skapa inköpslista"}
        </button>
      </div>
    </div>
  );
}
