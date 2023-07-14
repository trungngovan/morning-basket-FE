import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ProductType } from '../../../../@types/product'
import Price from './Price'
import { ChangeEvent, useState } from 'react'
import { AddCartWrapper } from './style'
import { RegularText, TitleText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useCart } from '../../../../hooks/useCart'

type Props = {
    product: ProductType | null
}

const ProductBooking = ({ product }: Props) => {
    if (!product) return <></>
    const { addProductToCart } = useCart()
    const { name, photo, price, tags, quantity } = product

    const [amount, setAmount] = useState<number | string>(1)
    const [error, setError] = useState(false)

    const handleCount = (count: 1 | -1) => {
        // setAmount((prev) => Math.max(0, prev + count))
        setAmount((prev) => {
            prev = prev as number
            1 <= prev + count && prev + count <= quantity
                ? setError(false)
                : prev + count >= quantity
                ? setError(true)
                : null
            return Math.max(1, prev + count)
        })
    }

    // const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault()
    //     const value = event.target.value
    //     setAmount(() => {
    //         typeof value === 'string' ||
    //             (typeof value === 'number' && value <= quantity)
    //             ? setError(false)
    //             : setError(true)
    //         return !value ? value : Math.max(1, parseInt(value))
    //     })
    // }

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

        setAmount(1)
    }
    const formattedPrice = !product.price
        ? 0
        : product.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
          })
    return (
        <div className="flex gap-10 p-10">
            <div className="aspect-square w-1/3">
                <img
                    alt={product.name}
                    src={`/products/${photo}`}
                    className="w-full h-full"
                />
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center mb-3 gap-3">
                    <div className="text-3xl font-bold">{name}</div>
                    <div className="flex gap-2">
                        {tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full text-yellow-500 font-bold bg-yellow-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <Price price={price} oldPrice={price} />
                <div className="flex items-center gap-10 mt-10">
                    <div className="text-lg font-medium">Số lượng</div>
                    <div className="w-24 flex items-center">
                        <QuantityInput
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={amount as number}
                        />
                    </div>
                    <div className="text-sm font-medium">
                        (kho có sẵn {quantity})
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
                        {/* <button onClick={handleAddToCart}> */}
                        <button>
                            <ShoppingCart weight="fill" size={22} />
                            <p className="ml-2">Thêm vào giỏ hàng</p>
                        </button>
                    </AddCartWrapper>
                </div>
            </div>
        </div>
    )
}

export default ProductBooking
