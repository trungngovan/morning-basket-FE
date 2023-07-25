import React from 'react'
import { PiShoppingCartFill } from 'react-icons/pi'
import { ProductType } from '../../../../@types/products'
import Price from './Price'
import { useState } from 'react'
import { AddCartWrapper } from './style'
// import { RegularText, TitleText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useCart } from '../../../../hooks/useCart'

type Props = {
    product: ProductType | null
}

const ProductBooking = ({ product }: Props) => {
    if (!product) return <></>
    const { addProductToCart } = useCart()
    const [quantity, setQuantity] = useState<number | string>(1)
    const [error, setError] = useState(false)

    const handleCount = (count: 1 | -1) => {
        // setAmount((prev) => Math.max(0, prev + count))
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
        // setAmount((state) => state as number + 1)
        handleCount(1)
    }

    const handleDecrease = () => {
        // setAmount((state) => state as number - 1)
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
    // const formattedPrice = !product.price
    //     ? 0
    //     : product.price.toLocaleString('pt-BR', {
    //           minimumFractionDigits: 2,
    //       })
    return (
        <div className="flex gap-10 p-10">
            <div className="aspect-square w-1/3">
                <img
                    alt={product.name}
                    src={`/products/${product.photo}`}
                    className="w-full h-full"
                />
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center mb-3 gap-3">
                    <div className="text-3xl font-bold">{product.name}</div>
                    <div className="flex gap-2">
                        {product.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full text-yellow-500 font-bold bg-yellow-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <Price price={product.price} oldPrice={product.price} />
                <div className="flex items-center gap-10 mt-10">
                    <div className="text-lg font-medium">Số lượng</div>
                    <div className="w-24 flex items-center">
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={quantity as number}
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
                    className="w-1/5 min-w-[200px] mt-5 text-lg font-bold"
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
