const useFormatCurrency = () => {
  const format = (number: number | string) => {
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  };
  return format;
};

export default useFormatCurrency;
