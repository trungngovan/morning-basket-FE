import React from 'react'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
    const { colors } = useTheme()

    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete your order
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    title="Địa chỉ nhận hàng"
                    subtitle="Vui lòng nhập địa chỉ chi tiết"
                    icon={
                        <MapPinLine
                            color={colors['brand-yellow-dark']}
                            size={22}
                        />
                    }
                />

                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Phương thức thanh toán"
                    subtitle="Vui lòng chọn phương thức thanh toán"
                    icon={
                        <CurrencyDollar
                            color={colors['brand-purple']}
                            size={22}
                        />
                    }
                />

                <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}
