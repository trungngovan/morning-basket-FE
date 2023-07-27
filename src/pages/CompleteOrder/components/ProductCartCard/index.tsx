import React from 'react'
import { PiTrash } from 'react-icons/pi'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import useFormatCurrency from '../../../../hooks/useFormatCurrency'
import {
    ActionsContainer,
    ProductCartCardContainer,
    RemoveButton,
} from './styles'

interface ProductCardCardProps {
    product: CartItem
}

export function ProductCartCard({ product }: ProductCardCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart()
    const format = useFormatCurrency()

    function handleIncrease() {
        changeCartItemQuantity(product.id as number, 'increase')
    }

    function handleDecrease() {
        changeCartItemQuantity(product.id as number, 'decrease')
    }

    function handleRemove() {
        removeCartItem(product.id as number)
    }

    const productTotal = product.price * product.quantity
    const formattedPrice = format(productTotal)

    return (
        <ProductCartCardContainer>
            <div>
                <img
                    src={`/products/${product.barcode}@150x120.png`}
                    alt={product.name}
                />

                <div>
                    <RegularText color="subtitle">{product.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput
                            size="small"
                            quantity={product.quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                        <RemoveButton onClick={handleRemove}>
                            <PiTrash size={18} />
                            XÓA
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>{formattedPrice}</p>
        </ProductCartCardContainer>
    )
}
