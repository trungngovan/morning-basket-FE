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

interface ProductProps {
    product: ProductType
    onPreviewButtonClick: (product: ProductType) => void
}

export function ProductCard({ product, onPreviewButtonClick }: ProductProps) {
    const { addProductToCart } = useCart()
    const navigate = useNavigate()
    const [showPreviewButton, setShowPreviewButton] = useState(false)
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

    const formattedPrice = !product.price
        ? 0
        : product.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
          })

    const handlePreview = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation()
        onPreviewButtonClick(product)
    }

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <ProductCardContainer
            onClick={handleNavigate}
            className="cursor-pointer"
            onMouseEnter={() => setShowPreviewButton(true)}
            onMouseLeave={() => setShowPreviewButton(false)}
        >
            <img
                src={`/products/${product.barcode}@150x120.png`}
                alt={product.name}
            />

            <Tags>
                {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>

            <PreviewButton
                className={showPreviewButton ? 'visible' : 'invisible'}
                onClick={(e) => {
                    handlePreview(e)
                }}
            >
                Xem trước
            </PreviewButton>
            <Name>{product.name}</Name>
            {/* <Description>{product.description}</Description> */}
            <CardFooter
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                    <RegularText size="s">$</RegularText>
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
