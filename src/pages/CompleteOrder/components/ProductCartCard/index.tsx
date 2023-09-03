import React from 'react'
import { PiTrash } from 'react-icons/pi'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { useCart, CartItemType } from '../../../../hooks/useCart'
import useFormatCurrency from '../../../../hooks/useFormatCurrency'
import {
    ActionsContainer,
    ProductCartCardContainer,
    RemoveButton,
} from './styles'

interface Props {
    item: CartItemType
}

export function ProductCartCard({ item }: Props) {
    const { changeCartItemQuantity, removeCartItem } = useCart()
    const format = useFormatCurrency()

    function handleIncrease() {
        changeCartItemQuantity(item.id as number, 'increase')
    }

    function handleDecrease() {
        changeCartItemQuantity(item.id as number, 'decrease')
    }

    function handleRemove() {
        removeCartItem(item.id as number)
    }

    const itemTotal = item.price * item.selectedQuantity
    const formattedPrice = format(itemTotal)

    return (
        <ProductCartCardContainer>
            <div>
                <img
                    src={`/products/${item.barcode}@150x120.png`}
                    alt={item.name}
                />

                <div>
                    <RegularText color="subtitle">{item.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput
                            size="small"
                            quantity={item.selectedQuantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            maxQuantity={item.quantity}
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
