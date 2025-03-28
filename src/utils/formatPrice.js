const formatPrice = (price) => {
  if (!price || isNaN(price)) return "N/A";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(price);
};

export default formatPrice;
