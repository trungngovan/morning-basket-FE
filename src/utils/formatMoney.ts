export function formatMoney(value: number) {
  if (!value) { value = 0; }
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
