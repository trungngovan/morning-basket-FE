import React from 'react'
import { QuantityInput } from '../QuantityInput'
import { TitleText } from '../Typography'
import {
    ProductPreviewContainer,
    ProductPreviewContent,
    ProductPreviewFooter,
    AddCartWrapper,
    Description,
    Name,
} from './styles'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import { ProductType } from '../../@types/products'
import useFormatCurrency from '../../hooks/useFormatCurrency'
import { defaultTheme } from '../../styles/themes/default'
import './styles.css'

interface ProductPreviewProps {
    product: ProductType
    onClose: () => void
}

export function ProductPreview({ product, onClose }: ProductPreviewProps) {
    const { addProductToCart } = useCart()
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

    return (
        <div
            className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: 'rgba(0, 0, 0, .7)' }}
            onClick={onClose}
        >
            <div
                className="rounded-[6px_36px_6px_36px] p-4 pt-0 flex flex-col items-center text-center top-1/2 left-1/2 z-50 w-4/5 h-1/3 md:w-[20rem] 2xl:h-1/5"
                style={{
                    background: defaultTheme.colors['base-card'],
                    transform: 'translate(-50 %, -50 %) scale(1)',
                    transition: 'all 0.2s ease-in -out',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                }}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <img
                    src={`/products/${product.photo}`}
                    alt={product.name}
                    className="w-[7.5rem] h-[7.5rem] mt-[-2rem] rounded-full"
                />
                <div className="modal-content py-4 text-left px-6">
                    <Name>{product.name}</Name>
                    <Description>{product.description}</Description>
                </div>
                <ProductPreviewFooter>
                    <div>
                        <TitleText size="s" color="text" as="strong">
                            {format(product.price)}
                        </TitleText>
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
                </ProductPreviewFooter>
                {error && (
                    <div className="text-sm text-red-500 font-medium pt-3">
                        Số lượng đặt nhiều hơn mức tối đa!
                    </div>
                )}
            </div>
        </div>
    )
}
