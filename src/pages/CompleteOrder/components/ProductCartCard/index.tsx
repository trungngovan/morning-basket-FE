import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  ActionsContainer,
  ProductCartCardContainer,
  RemoveButton,
} from "./styles";

interface ProductCardCardProps {
  product: CartItem;
}

export function ProductCartCard({ product }: ProductCardCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(product.id);
  }

  const coffeeTotal = product.price * product.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <ProductCartCardContainer>
      <div>
        <img src={`/coffees/${product.photo}`} alt="Café" />

        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={product.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={18} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$ {formattedPrice}</p>
    </ProductCartCardContainer>
  );
}
