
export const composeCategoryParams = (categories) => {
  if (!categories.length) return "";

  const composedParams = "?category=" + categories.join("&category=");
  return composedParams;
}