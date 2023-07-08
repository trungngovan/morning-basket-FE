import React, { useState } from "react";
import { ProductCard } from "../ProductCard";
import { TitleText } from "../Typography";
import {
  ProductList,
  OurProductsContainer,
  PaginationContainer,
  TagList,
  Tag,
} from "./styles";
import { Pagination } from "../Pagination";

import { products } from "../../mock/coffee";

export function OurProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Create an array of unique tags
  const tags = [...new Set(products.flatMap((product) => product.tags))];

  // Initialize the selected tag to "all"
  const [selectedTag, setSelectedTag] = useState("all");
  const [prevSelectedTag, setPrevSelectedTag] = useState("");

  // Filter the products based on the selected tag
  const filteredProducts =
    selectedTag === "all"
      ? products
      : products.filter((product) => product.tags.includes(selectedTag));

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTagSelect = (tag: string) => {
    setPrevSelectedTag(selectedTag);
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <OurProductsContainer>
      <TitleText size="l" color="subtitle">
        Products
      </TitleText>
      <TagList>
        <Tag
          key={"all"}
          isActive={selectedTag === "all"}
          onClick={() => handleTagSelect("all")}
          variant="yellow"
        >
          All
        </Tag>
        {tags.map((tag) => (
          <Tag
            key={tag}
            isActive={selectedTag === tag}
            onClick={() => {
              setPrevSelectedTag(selectedTag);
              setSelectedTag(tag);
            }}
            variant={selectedTag === tag ? "yellow" : "purple"}
          >
            {tag}
          </Tag>
        ))}
      </TagList>
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
