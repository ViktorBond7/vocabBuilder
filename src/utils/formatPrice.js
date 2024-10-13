export const formatPrice = (price) => {
  const priceInDecimal = price.toFixed(2);
  return priceInDecimal.replace(".", ",");
};
