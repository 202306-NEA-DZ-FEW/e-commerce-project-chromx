export const CalculateDiscount = (price, discountPercentage) => {
  return price - price * (discountPercentage / 100)
}
