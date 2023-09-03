import { MouseEvent } from 'react'
import { QuantityInput } from '../QuantityInput'
import {
    Description,
    Name,
} from './styles'
import '../../styles/modal.css'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useCart, CartItemType } from '../../hooks/useCart'
import { useState } from 'react'
import { ProductType } from '../../@types/products'
import { defaultTheme } from '../../styles/themes/default'
import { useNavigate } from 'react-router-dom'
import { Tags } from '../ProductCard/styles'
import useFormatCurrency from '../../hooks/useFormatCurrency'

interface Props {
    product: ProductType
    onClose: () => void
    onTagClick: (tag: any) => void
}

export function ProductPreview({ product, onClose, onTagClick }: Props) {
    const { addProductToCart } = useCart()
    const [selectedQuantity, setSelectedQuantity] = useState<number | string>(1)
    const [error, setError] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const format = useFormatCurrency()

    const product_tags =
        product.tags.length > 0
            ? product.tags
            : ['product', 'test', 'demo', 'example', 'awesome']

    const navigate = useNavigate()

    const handleCount = (count: 1 | -1) => {
        setSelectedQuantity((prev) => {
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
        const itemToAdd = {
            ...product,
            selectedQuantity,
        } as CartItemType

        addProductToCart(itemToAdd)

        setSelectedQuantity(1)
    }

    const handleNavigate = (
        e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation()
        navigate(`/product/${product.id}`)
    }

    return (
        <div
            className="fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: 'rgba(0, 0, 0, .7)' }}
            onClick={onClose}
        >
            <div
                className="px-2 pb-4 rounded-[6px_36px_6px_36px] flex flex-col items-center justify-center z-50 w-4/5 max-h-[70%] md:max-w-[40%] xl:max-w-[20%] 2xl:max-w-[15%]"
                style={{
                    background: defaultTheme.colors['base-card'],
                    transform: 'translate(-50 %, -50 %) scale(1)',
                    transition: 'all 0.1s ease-in -out',
                    boxShadow: '0 0 8px rgba(241, 233, 201, 0.7)',
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
                        <span
                            key={tag}
                            onClick={() => {
                                onClose()
                                onTagClick(tag)
                            }}
                            className="cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </Tags>
                <div className="flex-1 w-full flex flex-col items-center justify-start">
                    <Name
                        onClick={handleNavigate}
                        className="cursor-pointer text-center hover:underline"
                    >
                        {product.name}
                    </Name>
                    <Description style={{ scrollbarGutter: 'stable' }}>
                        {product.description
                            ? product.description
                            : '(Không có mô tả)'}
                    </Description>
                </div>
                <div className="flex-1 w-full flex flex-row items-center justify-around">
                    <div>
                        {product.price ? (
                            <p
                                className='text-xl font-["Baloo_2"] text-bold'
                                style={{
                                    color: defaultTheme.colors['base-text'],
                                }}
                            >
                                {format(product.price)}
                            </p>
                        ) : (
                            <p
                                className='text-sm font-["Baloo_2"] text-bold'
                                style={{
                                    color: defaultTheme.colors['base-label'],
                                }}
                            >
                                (Giá: liên hệ)
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-[3px] w-[7.5rem]">
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={selectedQuantity as number}
                            maxQuantity={product.quantity as number}
                        />
                        <button
                            className="w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-md ml-[0.3rem] duration-300"
                            style={{
                                background: onHover
                                    ? defaultTheme.colors['brand-purple']
                                    : defaultTheme.colors['brand-purple-dark'],
                                color: defaultTheme.colors['base-card'],
                            }}
                            onClick={handleAddToCart}
                            onMouseEnter={() => {
                                setOnHover(true)
                            }}
                            onMouseLeave={() => {
                                setOnHover(false)
                            }}
                        >
                            <PiShoppingCartFill size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
