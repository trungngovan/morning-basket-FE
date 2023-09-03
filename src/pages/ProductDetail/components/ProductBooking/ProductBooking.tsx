import React, { useState } from 'react'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useCart, CartItemType } from '../../../../hooks/useCart'
import { ProductType } from '../../../../@types/products'
import { AddCartWrapper } from './style'
import { QuantityInput } from '../../../../components/QuantityInput'
import Price from './Price'

type Props = {
    product: ProductType | null
}

const ProductBooking = ({ product }: Props) => {
    if (!product) return <></>
    const { addProductToCart } = useCart()
    const [selectedQuantity, setSelectedQuantity] = useState<number | string>(1)
    const [error, setError] = useState(false)

    const handleCount = (count: 1 | -1) => {
        // setAmount((prev) => Math.max(0, prev + count))
        setSelectedQuantity((prev) => {
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
        // setAmount((state) => state as number + 1)
        handleCount(1)
    }

    const handleDecrease = () => {
        // setAmount((state) => state as number - 1)
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

    return (
        <div className="flex flex-col items-stretch justify-center gap-5 mt-5 md:flex-row md:justify-start md:items-start">
            <div className="flex items-start justify-center md:w-1/3 md:h-1/3 md:aspect-square">
                <img
                    alt={product.name}
                    src={`/products/${product.photo}`}
                    className="w-1/2 h-1/2 md:w-4/5 md:h-4/5"
                />
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap mb-3 gap-3 justify-center md:justify-start">
                    <div className="text-xl md:text-3xl font-bold">
                        {product.name}
                    </div>
                    {/* <div className="flex gap-2">
                        {product.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full text-yellow-500 font-bold bg-yellow-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div> */}
                </div>
                <Price price={product.price} />{' '}
                {/* Currently don't use oldPrice */}
                <div className="flex justify-center items-center my-3 gap-2 md:justify-start">
                    <div className="md:text-lg font-medium">Số lượng</div>
                    <div className="w-24 flex items-center">
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={selectedQuantity as number}
                            maxQuantity={product.quantity}
                        />
                    </div>
                    <div className="text-sm font-medium">
                        (kho có sẵn {product.quantity})
                    </div>
                </div>
                {error && (
                    <div className="text-sm text-red-500 font-medium pt-3">
                        Số lượng đặt nhiều hơn mức tối đa!
                    </div>
                )}
                <div
                    className="my-5 text-lg font-bold flex justify-end md:justify-start"
                    onClick={handleAddToCart}
                >
                    <AddCartWrapper>
                        <button>
                            <PiShoppingCartFill size={22} />
                            <p className="ml-2">Thêm vào giỏ hàng</p>
                        </button>
                    </AddCartWrapper>
                </div>
            </div>
        </div>
    )
}

export default ProductBooking
