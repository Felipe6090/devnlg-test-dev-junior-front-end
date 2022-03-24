import { api } from "../thirdPartyApi";

export default async function GetAllItems() {
  const brazilianProducts = await api.get("brazilian_provider").then((res) => {
    return res.data;
  });

  const europeanProducts = await api.get("european_provider").then((res) => {
    return res.data;
  });

  const allProducts = [brazilianProducts, europeanProducts];

  console.log(allProducts);

  return allProducts;
}
