import { api } from "../thirdPartyApi";

export default async function GetItemsService(formatHelper: boolean) {
  const brazilianProducts = await api.get("brazilian_provider").then((res) => {
    return res.data;
  });

  const europeanProducts = await api.get("european_provider").then((res) => {
    return res.data;
  });

  const allProducts = !formatHelper
    ? [brazilianProducts, europeanProducts]
    : brazilianProducts.concat(europeanProducts);

  return allProducts;
}
