import { Minus, Plus } from "phosphor-react";
import { type Product } from "../../../../@types/product";
import Price from "./Price";
import { useState } from "react";

type Props = {
  product: Product | null;
};

const ProductBooking = ({ product }: Props) => {
  if (!product) return <></>;

  const { name, photo, price, tags } = product;
  const [amount, setAmount] = useState(1);

  const handleCount = (count: 1 | -1) => {
    setAmount((prev) => Math.max(0, prev + count));
  };

  return (
    <div className="flex gap-10">
      <div className="aspect-square w-1/3">
        <img
          alt={product.name}
          src={`/products/${photo}`}
          className="w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center mb-3 gap-3">
          <div className="text-3xl font-bold">{name}</div>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full text-yellow-500 font-bold bg-yellow-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Review section */}
        {/* <div></div> */}
        <Price price={price} oldPrice={price} />
        <div className="flex items-center gap-10 mt-10">
          <div className="text-lg font-medium">Số lượng</div>
          <div className="flex items-center border w-fit ">
            <div
              onClick={() => handleCount(-1)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Minus />
            </div>
            <div className="border-x min-w-[40px] h-10 flex items-center justify-center">
              {amount}
            </div>
            <div
              onClick={() => handleCount(1)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Plus />
            </div>
          </div>
        </div>
        <button className="p-4 min-w-[200px] hover:bg-yellow-400 mt-10 text-xl bg-yellow-500 text-white font-bold rounded-full">
          Đặt mua
        </button>
      </div>
    </div>
  );
};

export default ProductBooking;
