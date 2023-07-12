const useFormatCurrency = () => {
  const format = (number: number | string) => {
    if (!number) { number = 0; }
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  };
  return format;
};

export default useFormatCurrency;
