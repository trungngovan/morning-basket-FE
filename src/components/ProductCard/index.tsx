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
    const product_tags = product.tags.length > 0 ? product.tags : ["product", "test", "demo", "example", "awesome"]
    const handleCount = (count: 1 | -1) => {
        setQuantity((prev) => {
            prev = prev as number
            1 <= prev + count && prev + count <= product.quantity
                ? setError(false)
                : prev + count >= product.quantity
                    ? setError(true)
                    : null
            return Math.min(product.quantity, prev + count)
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
        <ProductCardContainer className='px-2 pb-2 gap-2'>
            <img
                src={`/products/${product.barcode}@150x120.png`}
                alt={product.name}
                className="flex-1 max-w-[7.5rem] max-h-[7.5rem] mt-[-2rem] aspect-square rounded-full hover:border-2 hover:border-purple-600 cursor-pointer"
                onClick={(e) => {
                    handlePreview(e)
                }}
            />
            <Tags>
                {product_tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>
            <div className="flex-1 w-full flex flex-col items-center justify-start text-center">
                <Name onClick={handleNavigate} className="cursor-pointer hover:underline">
                    {product.name}
                </Name>
                {/* <Description>{product.description ? product.description : product.name}</Description> */}
            </div>

            <CardFooter
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div>
                    <TitleText size="s" color="text" as="strong">
                        {format(product.price ? product.price : 50000)}
                    </TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity as number}
                        maxQuantity={product.quantity as number}
                    />
                    <button onClick={handleAddToCart}>
                        <PiShoppingCartFill size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
            {/* {error && (
                <div className="text-xs text-red-500 font-medium pt-2">
                    Số lượng đặt nhiều hơn mức tối đa!
                </div>
            )} */}
        </ProductCardContainer >
    )
}
