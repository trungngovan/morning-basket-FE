import { QuantityInput } from '../QuantityInput'
import { TitleText, RegularText } from '../Typography'
import {
    ProductPreviewContainer,
    ProductPreviewContent,
    ProductPreviewFooter,
    AddCartWrapper,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import { Description, Name } from '../ProductCard/styles'
import { ProductType } from '../../@types/product'

interface ProductPreviewProps {
    product: ProductType
    onClose: () => void
}

interface CloseButtonProps {
    isShow: boolean
    onClick: () => void
}

const CloseButton = ({ isShow, onClick }: CloseButtonProps) => {
    return (
        <div
            className="absolute top-0 right-0 p-2 cursor-pointer ease-in-out duration-300"
            onClick={() => onClick()}
        >
            {isShow ? (
                <button
                    type="button"
                    className="opacity-50 bg-red-500 rounded-full p-2 inline-flex items-center justify-center"
                >
                    <span className="sr-only">Close menu</span>
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            ) : null}
        </div>
    )
}

export function ProductPreview({ product, onClose }: ProductPreviewProps) {
    const { addProductToCart } = useCart()

    const [showCloseButton, setShowCloseButton] = useState(false)

    const [amount, setAmount] = useState<number | string>(1)
    const [error, setError] = useState(false)

    const handleCount = (count: 1 | -1) => {
        // setAmount((prev) => Math.max(0, prev + count))
        setAmount((prev) => {
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
            amount,
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
        <ProductPreviewContainer
            className="modal bg-opacity-50"
            onMouseEnter={() => setShowCloseButton(true)}
            onMouseLeave={() => setShowCloseButton(false)}
        >
            <CloseButton
                onClick={onClose}
                isShow={showCloseButton}
            ></CloseButton>

            <img src={`/products/${product.photo}`} alt={product.name} />

            <ProductPreviewContent>
                <Name>{product.name}</Name>
                <Description>{product.description}</Description>
            </ProductPreviewContent>

            <ProductPreviewFooter>
                <div>
                    <RegularText size="s">${product.price}</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={amount as number}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </ProductPreviewFooter>
            {error && (
                <div className="text-sm text-red-500 font-medium pt-3">
                    Số lượng đặt nhiều hơn mức tối đa!
                </div>
            )}
        </ProductPreviewContainer>
    )
}