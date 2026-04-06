interface Props {
  value: string;
  onChange: (value: string) => void;
}

const filters = [
  { label: "Alla", value: "" },
  { label: "Vardag", value: "0" },
  { label: "Helg", value: "1" },
];

export default function FilterBar({ value, onChange }: Props) {
  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            value === f.value
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
