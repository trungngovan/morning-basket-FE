// import { products } from "../mock/coffee";
import { GetProductsReponse, Product } from "../components/ProductType";
import { apiGet} from "../apis/api";

type Props = {
  id: number;
};

export const getProductDetail = async ({ id }: Props) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      apiGet<GetProductsReponse>("http://localhost:3000/products").then((reponse) => {
        const products = reponse.data.products;
        resolve(products.find((product) => product.id === id));
      });
    }, 200);
  });
};
