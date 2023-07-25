import React from 'react'
import { PiMapPinLine, PiCurrencyDollar } from 'react-icons/pi'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { Button } from '../../../../components/Button'
import { useCart } from '../../../../hooks/useCart'
import { OrderData } from '../../../../pages/CompleteOrder'

interface Props {
    defaultValues: OrderData
}

export function CompleteOrderForm({ defaultValues }: Props) {
    const { colors } = useTheme()
    const { cartItems, cartQuantity } = useCart()

    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Hoàn tất đơn hàng
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    title="Địa chỉ nhận hàng"
                    subtitle="Vui lòng nhập địa chỉ chi tiết"
                    icon={
                        <PiMapPinLine
                            color={colors['brand-yellow-dark']}
                            size={22}
                        />
                    }
                />

                <AddressForm defaultValues={defaultValues} />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Phương thức thanh toán"
                    subtitle="Vui lòng chọn phương thức thanh toán"
                    icon={
                        <PiCurrencyDollar
                            color={colors['brand-purple']}
                            size={22}
                        />
                    }
                />

                <PaymentMethodOptions defaultValues={defaultValues} />
            </FormSectionContainer>
            <Button
                text="Đặt hàng"
                disabled={cartQuantity <= 0}
                type="submit"
            />
        </CompleteOrderFormContainer>
    )
}
