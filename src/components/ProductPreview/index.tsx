import React, { MouseEvent } from 'react'
import { QuantityInput } from '../QuantityInput'
import { TitleText } from '../Typography'
import {
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
import "../../styles/modal.css"
import { useNavigate } from 'react-router-dom'
import { Tags } from '../ProductCard/styles'

interface ProductPreviewProps {
    product: ProductType
    onClose: () => void
}

export function ProductPreview({ product, onClose }: ProductPreviewProps) {
    const { addProductToCart } = useCart()
    const format = useFormatCurrency()
    const [quantity, setQuantity] = useState<number | string>(1)
    const [error, setError] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const product_tags = product.tags.length > 0 ? product.tags : ["product", "test", "demo", "example", "awesome"]

    const navigate = useNavigate()

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

    const handleNavigate = (
        e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation()
        navigate(`/product/${product.id}`)
    }

    return (
        <div
            className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: 'rgba(0, 0, 0, .7)' }}
            onClick={onClose}
        >
            <div
                className="rounded-[6px_36px_6px_36px] flex flex-col items-center justify-center text-center z-50 w-4/5 h-1/3 md:w-[20rem] 2xl:h-1/3"
                style={{
                    background: defaultTheme.colors['base-card'],
                    transform: 'translate(-50 %, -50 %) scale(1)',
                    transition: 'all 0.1s ease-in -out',
                    boxShadow: '0 0 8px rgba(241, 233, 201, 0.7)'
                }}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <img
                    src={`/products/${product.photo}`}
                    alt={product.name}
                    className="flex-1 max-w-[10rem] max-h-[10rem] mt-[-4rem] aspect-square rounded-full"
                />
                <Tags>
                    {product_tags.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </Tags>
                <div className="flex-1 w-full px-2 flex flex-col items-center justify-start text-center">
                    <Name onClick={handleNavigate} className="cursor-pointer hover:underline">{product.name}</Name>
                    <Description>{product.description ? product.description : product.name}</Description>
                </div>
                <div className='flex-1 w-full px-2 flex flex-row items-center justify-around'>
                    <div className='flex items-center gap-[3px]'>
                        <TitleText size="s" color="text" as="strong">
                            {format(product.price ? product.price : 50000)}
                        </TitleText>
                    </div>
                    <div className='flex items-center gap-[3px] w-[7.5rem]'>
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={quantity as number}
                            maxQuantity={product.quantity as number}
                        />
                        <button
                            className='w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-md ml-[0.3rem] duration-300'
                            style={{
                                background: onHover ? defaultTheme.colors['brand-purple'] : defaultTheme.colors['brand-purple-dark'],
                                color: defaultTheme.colors['base-card'],
                            }}
                            onClick={handleAddToCart}
                            onMouseEnter={() => { setOnHover(true) }}
                            onMouseLeave={() => { setOnHover(false) }}
                        >
                            <PiShoppingCartFill size={22} />
                        </button>
                    </div>
                </div>
                {/* {error && (
                    <div className="flex-1 text-sm text-red-500 font-medium pt-3">
                        Số lượng đặt nhiều hơn mức tối đa!
                    </div>
                )} */}
            </div>
        </div >
    )
}
