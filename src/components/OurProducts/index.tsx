// import { ProductCard } from "../ProductCard";
// import { TitleText } from "../Typography";
// import { CoffeeList, OurCoffeesContainer } from "./styles";

// import { products } from "../../mock/coffee";

// export function OurCoffees() {
//   return (
//     <OurCoffeesContainer className="container">
//       <TitleText size="l" color="subtitle">
//         Product
//       </TitleText>

//       <CoffeeList>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </CoffeeList>
//     </OurCoffeesContainer>
//   );
// }

import React, { useState } from "react";
import { ProductCard } from "../ProductCard";
import { TitleText } from "../Typography";
import {
  ProductList,
  OurProductsContainer,
  PaginationContainer,
} from "./styles";
import { Pagination } from "../Pagination";

import { products } from "../../mock/coffee";

export function OurCoffees() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <OurProductsContainer className="container">
      <TitleText size="l" color="subtitle">
        Products
      </TitleText>

      <ProductList>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>

      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginationContainer>
    </OurProductsContainer>
  );
}
