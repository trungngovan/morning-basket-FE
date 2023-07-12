import { products } from "../mock/coffee";

type Props = {
  id: number;
};

export const getProductDetail = async ({ id }: Props) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 200);
  });
};
