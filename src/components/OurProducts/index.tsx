import React, { useState, useEffect } from "react";
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
import SearchBar from "../SearchBar";

import { products } from "../../mock/coffee";

export function OurProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const [searchResults, setSearchResults] = useState(products);
  const [allProducts, setAllProducts] = useState(products);
  const [isSearched, setIsSearched] = useState(false);

  // Create an array of unique tags
  const tags = [...new Set(allProducts.flatMap((product) => product.tags))];

  // Initialize the selected tag to "all"
  const [selectedTag, setSelectedTag] = useState("all");
  const [prevSelectedTag, setPrevSelectedTag] = useState("");

  useEffect(() => {
    if (selectedTag === "all") {
      setSearchResults(allProducts);
    } else {
      setSearchResults(
        allProducts.filter((product) => product.tags.includes(selectedTag))
      );
    }
    setCurrentPage(1);
  }, [selectedTag, allProducts]);

  const totalPages = Math.ceil(searchResults.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResults.slice(
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

    if (tag === "all") {
      setSearchResults(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product.tags.includes(tag.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  const handleSearch = (results: any) => {
    if (results.length === 0) {
      setSearchResults(allProducts);
    } else {
      setSearchResults(results);
    }
    setSelectedTag("all");
    setAllProducts(results);
    setIsSearched(true);
  };

  return (
    <OurProductsContainer>
      <TitleText size="l" color="subtitle">
        Products
      </TitleText>
      {/* <SearchBar products={allProducts} onSearch={handleSearch} /> */}
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