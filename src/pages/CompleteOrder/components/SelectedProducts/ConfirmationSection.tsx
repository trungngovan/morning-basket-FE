import React from 'react'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
    const { cartItemsTotal } = useCart()
    const cartTotal = DELIVERY_PRICE + cartItemsTotal

    const formattedItemsTotal = formatMoney(cartItemsTotal)
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
    const formattedCartTotal = formatMoney(cartTotal)

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total items</RegularText>
                <RegularText size="s">$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Delivery</RegularText>
                <RegularText size="s">$ {formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">
                    Total
                </RegularText>
                <RegularText weight="700" color="subtitle" size="l">
                    $ {formattedCartTotal}
                </RegularText>
            </div>
        </ConfirmationSectionContainer>
    )
}
