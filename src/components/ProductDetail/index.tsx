import { Product } from "../ProductCard";
import { QuantityInput } from "../QuantityInput";
import { TitleText, RegularText } from "../Typography";
import {
  ProductDetailContainer,
  ProductDetailImage,
  ProductDetailContent,
  ProductDetailFooter,
  CloseButton,
  AddCartWrapper,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addProductToCart } = useCart();

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

  const formattedPrice = !product.price ? 0 : product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return (
    <ProductDetailContainer>
      <CloseButton onClick={onClose}>X</CloseButton>

      <ProductDetailImage
        src={`/products/${product.photo}`}
        alt={product.name}
      />

      <ProductDetailContent>
        <TitleText size="l" color="text" as="h2">
          {product.name}
        </TitleText>
        <RegularText size="m">{product.description}</RegularText>
      </ProductDetailContent>

      <ProductDetailFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <div>
          <AddCartWrapper>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={quantity}
            />
            <button onClick={handleAddToCart}>
              <ShoppingCart weight="fill" size={22} />
            </button>
          </AddCartWrapper>
        </div>
      </ProductDetailFooter>
    </ProductDetailContainer>
  );
}
