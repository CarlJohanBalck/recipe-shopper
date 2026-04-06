export function formatAmount(amount: number): string {
  if (amount === 0) return "";
  if (Number.isInteger(amount)) return String(amount);
  const fixed = amount.toFixed(1);
  return fixed.endsWith(".0") ? String(Math.round(amount)) : fixed;
}
