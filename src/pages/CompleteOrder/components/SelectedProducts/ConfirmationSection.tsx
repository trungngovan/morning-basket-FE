import React from 'react'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { ConfirmationSectionContainer } from './styles'
import useFormatCurrency from '../../../../hooks/useFormatCurrency'
const DELIVERY_PRICE = 0

export function ConfirmationSection() {
    const { cartItemsTotal } = useCart()
    const format = useFormatCurrency()

    const cartTotal = DELIVERY_PRICE + cartItemsTotal

    const formattedItemsTotal = format(cartItemsTotal)
    const formattedDeliveryPrice = format(DELIVERY_PRICE)
    const formattedCartTotal = format(cartTotal)

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Tổng tiền hàng</RegularText>
                <RegularText size="s">{formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Phí giao hàng</RegularText>
                <RegularText size="s">{formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">
                    Tổng
                </RegularText>
                <RegularText weight="700" color="subtitle" size="l">
                    {formattedCartTotal}
                </RegularText>
            </div>
        </ConfirmationSectionContainer>
    )
}
