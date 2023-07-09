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
import { Product } from "../ProductType";
import { ProductDetail } from "../ProductDetail";
import { products } from "../../mock/coffee";

export function OurProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isSearched, setIsSearched] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  useEffect(() => {
    setAllProducts(products);
    setSearchResults(products);
  }, []);

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
      setSearchResults(allProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.tags.includes(tag.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  const handleSearch = (results: Product[]) => {
    if (results.length === 0) {
      setSearchResults(allProducts);
    } else {
      setSearchResults(results);
    }
    setSelectedTag("all");
    setAllProducts(results);
    setIsSearched(true);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
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

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseProductDetail}
        />
      )}

      {!selectedProduct && (
        <ProductList>
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </ProductList>
      )}

      {!isSearched && !selectedProduct && (
        <PaginationContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </PaginationContainer>
      )}
    </OurProductsContainer>
  );
}
