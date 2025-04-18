export const getFoodIcon = (foodType?: Array<string>) => {
  if (!Array.isArray(foodType) || !foodType.length) return [];

  return foodType.reduce((acc: Array<Record<string, string>>, iterator) => {
    if (iterator === "made here")
      return [...acc, { icon: "Ã", type: iterator }];

    if (iterator === "box") return [...acc, { icon: "„", type: iterator }];

    if (iterator === "leaf") return [...acc, { icon: "4", type: iterator }];

    if (iterator === "kids") return [...acc, { icon: "Â", type: iterator }];

    if (iterator === "vegan") return [...acc, { icon: "»", type: iterator }];

    if (iterator === "new") return [...acc, { icon: "A", type: iterator }];

    return acc;
  }, []);
};
