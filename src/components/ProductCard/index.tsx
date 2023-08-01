import React from 'react'
import { QuantityInput } from '../QuantityInput'
import { RegularText, TitleText } from '../Typography'
import {
    ProductCardContainer,
    Tags,
    Name,
    Description,
    CardFooter,
    AddCartWrapper,
    PreviewButton,
} from './styles'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useCart } from '../../hooks/useCart'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../@types/products'
import useFormatCurrency from '../../hooks/useFormatCurrency'

interface ProductProps {
    product: ProductType
    onPreviewButtonClick: (product: ProductType) => void
}

export function ProductCard({ product, onPreviewButtonClick }: ProductProps) {
    const { addProductToCart } = useCart()
    const navigate = useNavigate()
    const format = useFormatCurrency()
    const [quantity, setQuantity] = useState<number | string>(1)
    const [error, setError] = useState(false)

    const handleCount = (count: 1 | -1) => {
        setQuantity((prev) => {
            prev = prev as number
            1 <= prev + count && prev + count <= product.quantity
                ? setError(false)
                : prev + count >= product.quantity
                ? setError(true)
                : null
            return Math.max(1, prev + count)
        })
    }

    const handleIncrease = () => {
        handleCount(1)
    }

    const handleDecrease = () => {
        handleCount(-1)
    }

    function handleAddToCart() {
        const productToAdd = {
            ...product,
            quantity,
        } as ProductType

        addProductToCart(productToAdd)

        setQuantity(1)
    }

    const handlePreview = (
        e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation()
        onPreviewButtonClick(product)
    }

    const handleNavigate = (
        e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation()
        navigate(`/product/${product.id}`)
    }

    return (
        <ProductCardContainer className="cursor-pointer">
            <img
                src={`/products/${product.barcode}@150x120.png`}
                alt={product.name}
                className="w-[7.5rem] h-[7.5rem] mt-[-2rem] rounded-full hover:border-2 hover:border-purple-600"
                onClick={(e) => {
                    handlePreview(e)
                }}
            />

            <Tags>
                {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>
            <Name onClick={handleNavigate} className="hover:underline">
                {product.name}
            </Name>
            {/* <Description>{product.description}</Description> */}
            <CardFooter
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div>
                    <TitleText size="m" color="text" as="strong">
                        {format(product.price)}
                    </TitleText>
                    {/* <RegularText size="s">$</RegularText> */}
                </div>
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity as number}
                    />
                    <button onClick={handleAddToCart}>
                        <PiShoppingCartFill size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
            {error && (
                <div className="text-xs text-red-500 font-medium pt-2">
                    Số lượng đặt nhiều hơn mức tối đa!
                </div>
            )}
        </ProductCardContainer>
    )
}
