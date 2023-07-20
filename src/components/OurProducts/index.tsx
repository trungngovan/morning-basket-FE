import React from 'react'
import { useEffect, useState } from 'react'
import { Pagination } from '../Pagination'
import { ProductCard } from '../ProductCard'
import { TitleText } from '../Typography'
import {
    OurProductsContainer,
    PaginationContainer,
    ProductList,
    Tag,
    TagList,
    HorizontalScrollWrapper,
} from './styles'
// import { products } from '../../mock/coffee'
import { ProductPreview } from '../ProductPreview'
import { GetAllProductsResponse, ProductType } from '../../@types/product'
import { apiGet } from '../../apis/api'

export function OurProducts() {
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 20

    const [searchResults, setSearchResults] = useState<ProductType[]>([])
    const [allProducts, setAllProducts] = useState<ProductType[]>([])
    const [isSearched, setIsSearched] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
        null
    )

    useEffect(() => {
        apiGet<GetAllProductsResponse>('/products').then(
            (response) => {
                if (response) {
                    setAllProducts(response.data.products)
                    setSearchResults(response.data.products)
                }
            }
        )
    }, [])

    // Create an array of unique tags
    const tags = [...new Set(allProducts.flatMap((product) => product.tags))]

    // Initialize the selected tag to "all"
    const [selectedTag, setSelectedTag] = useState('all')
    const [prevSelectedTag, setPrevSelectedTag] = useState('')

    useEffect(() => {
        if (selectedTag === 'all') {
            setSearchResults(allProducts)
        } else {
            setSearchResults(
                allProducts.filter((product) =>
                    product.tags.includes(selectedTag)
                )
            )
        }
        setCurrentPage(1)
    }, [selectedTag, allProducts])

    const totalPages = Math.ceil(searchResults.length / productsPerPage)
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = searchResults.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    )

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const handleTagSelect = (tag: string) => {
        setPrevSelectedTag(selectedTag)
        setSelectedTag(tag)
        setCurrentPage(1)

        if (tag === 'all') {
            setSearchResults(allProducts)
        } else {
            const filteredProducts = allProducts.filter((product) =>
                product.tags.includes(tag.toLowerCase())
            )
            setSearchResults(filteredProducts)
        }
    }

    const handleSearch = (results: ProductType[]) => {
        if (results.length === 0) {
            setSearchResults(allProducts)
        } else {
            setSearchResults(results)
        }
        setSelectedTag('all')
        setAllProducts(results)
        setIsSearched(true)
    }

    const handleOpenProductPreview = (product: ProductType) => {
        setSelectedProduct(product)
    }

    const handleCloseProductPreview = () => {
        setSelectedProduct(null)
    }

    return (
        <OurProductsContainer className="container">
            <TitleText size="l" color="subtitle" className="mt-5">
                Products
            </TitleText>

            {/* <SearchBar products={allProducts} onSearch={handleSearch} /> */}
            <HorizontalScrollWrapper>
                <TagList className="mt-5">
                    <Tag
                        key={'all'}
                        isActive={selectedTag === 'all'}
                        onClick={() => handleTagSelect('all')}
                        variant="yellow"
                    >
                        All
                    </Tag>
                    {tags.map((tag) => (
                        <Tag
                            key={tag}
                            isActive={selectedTag === tag}
                            onClick={() => {
                                setPrevSelectedTag(selectedTag)
                                setSelectedTag(tag)
                            }}
                            variant={selectedTag === tag ? 'yellow' : 'purple'}
                        >
                            {tag}
                        </Tag>
                    ))}
                </TagList>
            </HorizontalScrollWrapper>

            <ProductList>
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onPreviewButtonClick={() =>
                            handleOpenProductPreview(product)
                        }
                    />
                ))}
            </ProductList>

            {selectedProduct && (
                <ProductPreview
                    product={selectedProduct}
                    onClose={handleCloseProductPreview}
                />
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
    )
}
