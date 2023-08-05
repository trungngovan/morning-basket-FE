import React from 'react'
import { QuantityInput } from '../QuantityInput'
import { TitleText } from '../Typography'
import {
    ProductCardContainer,
    Tags,
    Name,
    CardFooter,
    AddCartWrapper,
} from './styles'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useCart } from '../../hooks/useCart'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../@types/products'
import useFormatCurrency from '../../hooks/useFormatCurrency'
import { defaultTheme } from '../../styles/themes/default'
import { Tag } from '../OurProducts/styles'

interface ProductProps {
    product: ProductType
    onImageClick: (product: ProductType) => void
    onTagClick: (tag: any) => void
}

export function ProductCard({ product, onImageClick, onTagClick }: ProductProps) {
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
        onImageClick(product)
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
                    <span
                        key={tag}
                        onClick={() => { onTagClick(tag) }}
                        className='cursor-pointer'
                    >
                        {tag}
                    </span>
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
                <div className='my-1'>
                    {product.price ?
                        <p
                            className='text-xl font-["Baloo_2"] text-bold'
                            style={{ color: defaultTheme.colors['base-text'] }}
                        >
                            {format(product.price)}
                        </p>
                        :
                        <p
                            className='text-sm font-["Baloo_2"] text-bold'
                            style={{ color: defaultTheme.colors['base-label'] }}
                        >
                            (Giá: liên hệ)
                        </p>
                    }
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
        </ProductCardContainer >
    )
}
