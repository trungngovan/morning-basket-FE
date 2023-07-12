import { QuantityInput } from "../QuantityInput";
import { RegularText, TitleText } from "../Typography";
import {
  ProductCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
  ViewDetailButton,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface ProductProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductProps) {
  const { addProductToCart } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    };

    addProductToCart(productToAdd);

    setQuantity(1);
  }

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  const handleClick = () => {
    onClick(product);
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <ProductCardContainer onClick={handleNavigate} className="cursor-pointer">
      <img src={`/coffees/${product.photo}`} alt="" />

      <Tags>
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Name>{product.name}</Name>
      {/* <Description>{product.description}</Description> */}

      <CardFooter>
        <div>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
          <RegularText size="s">$</RegularText>
        </div>
        <ViewDetailButton onClick={handleClick}>Detail</ViewDetailButton>
        {/* <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper> */}
      </CardFooter>
    </ProductCardContainer>
  );
}
