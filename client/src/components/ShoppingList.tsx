import { useState } from "react";
import type { ShoppingListResponse } from "../../../shared/types";
import ShoppingListCategory from "./ShoppingListCategory";
import { formatAmount } from "../lib/utils";

interface Props {
  data: ShoppingListResponse;
  onBack: () => void;
}

const categoryColors: Record<string, string> = {
  vegetables: "bg-green-50 text-green-700 border-green-200",
  dairy: "bg-blue-50 text-blue-700 border-blue-200",
  bread: "bg-amber-50 text-amber-700 border-amber-200",
  pasta: "bg-yellow-50 text-yellow-700 border-yellow-200",
  fish: "bg-cyan-50 text-cyan-700 border-cyan-200",
  meat: "bg-red-50 text-red-700 border-red-200",
  cheese: "bg-orange-50 text-orange-700 border-orange-200",
  freezer: "bg-indigo-50 text-indigo-700 border-indigo-200",
  övrigt: "bg-slate-50 text-slate-700 border-slate-200",
};

function buildClipboardText(data: ShoppingListResponse): string {
  const lines: string[] = ["Inköpslista", ""];
  for (const cat of data.categories) {
    for (const item of cat.items) {
      const amount = formatAmount(item.total_amount);
      const unit = item.unit || "";
      lines.push(`${item.name} — ${amount} ${unit}`.trimEnd());
    }
  }
  return lines.join("\n").trimEnd();
}

export default function ShoppingList({ data, onBack }: Props) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const toggleItem = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(buildClipboardText(data));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalItems = data.categories.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = checked.size;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tillbaka till recept
        </button>
        <span className="text-sm text-slate-400">
          {checkedCount} / {totalItems} klara
        </span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Inköpslista</h1>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm ${
            copied
              ? "bg-emerald-100 text-emerald-700"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {copied ? (
            <>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Kopierad!
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Kopiera lista
            </>
          )}
        </button>
      </div>

      {checkedCount > 0 && checkedCount < totalItems && (
        <div className="mb-4 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${(checkedCount / totalItems) * 100}%` }}
          />
        </div>
      )}

      <div className="space-y-4">
        {data.categories.map((cat) => (
          <ShoppingListCategory
            key={cat.category}
            category={cat}
            colorClass={categoryColors[cat.category] || categoryColors.övrigt}
            checked={checked}
            onToggle={toggleItem}
          />
        ))}
      </div>

      {checkedCount === totalItems && totalItems > 0 && (
        <div className="mt-8 text-center py-6 rounded-2xl bg-emerald-50 border border-emerald-200">
          <p className="text-lg font-semibold text-emerald-700">Allt klart!</p>
          <p className="text-sm text-emerald-600 mt-1">Du har allt du behöver</p>
        </div>
      )}
    </div>
  );
}
