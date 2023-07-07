import { ProductCard } from "../CoffeeCard";
import { TitleText } from "../Typography";
import { CoffeeList, OurCoffeesContainer } from "./styles";

import { products } from "../../mock/coffee";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Product
      </TitleText>

      <CoffeeList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  );
}
