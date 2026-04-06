import React, { createContext, useContext, useCallback, useState, type ReactNode } from "react";

interface SelectionContextType {
  selected: Set<number>;
  toggle: (id: number) => void;
  clear: () => void;
  count: number;
}

const SelectionContext = createContext<SelectionContextType | null>(null);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = useCallback((id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const clear = useCallback(() => setSelected(new Set()), []);

  return (
    <SelectionContext.Provider value={{ selected, toggle, clear, count: selected.size }}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error("useSelection must be used within SelectionProvider");
  return ctx;
}
