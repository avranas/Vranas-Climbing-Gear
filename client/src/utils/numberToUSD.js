export const numberToUSD = (number) => {
  return number.toLocaleString("en-US", {style:"currency", currency:"USD"});
}