import type { ShoppingListCategory as CategoryType } from "../../../shared/types";
import { formatAmount } from "../lib/utils";

interface Props {
  category: CategoryType;
  colorClass: string;
  checked: Set<string>;
  onToggle: (key: string) => void;
}

export default function ShoppingListCategory({
  category,
  colorClass,
  checked,
  onToggle,
}: Props) {
  return (
    <div className={`rounded-xl border p-4 ${colorClass}`}>
      <h3 className="font-semibold text-sm uppercase tracking-wide mb-3">
        {category.category}
      </h3>
      <ul className="space-y-2">
        {category.items.map((item) => {
          const key = `${category.category}:${item.name}:${item.unit}`;
          const isChecked = checked.has(key);
          return (
            <li key={key}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggle(key)}
                  className="h-4 w-4 rounded border-current text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <span
                  className={`flex-1 text-sm transition ${
                    isChecked ? "line-through opacity-50" : ""
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`text-sm tabular-nums transition ${
                    isChecked ? "line-through opacity-50" : "opacity-70"
                  }`}
                >
                  {formatAmount(item.total_amount)} {item.unit || ""}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
