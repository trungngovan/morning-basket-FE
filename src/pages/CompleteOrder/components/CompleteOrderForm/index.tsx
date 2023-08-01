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
import { useFormContext } from 'react-hook-form'

interface Props {
    defaultValues: OrderData
}

export function CompleteOrderForm({ defaultValues }: Props) {
    const { colors } = useTheme()
    const { cartItems, cartQuantity } = useCart()
    const { register } = useFormContext()

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
            <div className="flex items-center px-[2.5rem]">
                <input
                    id="remember-checkout"
                    // name="remember-checkout"
                    type="checkbox"
                    {...register('remember')}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                    htmlFor="remember-checkout"
                    className="ml-1 block text-sm leading-6 text-gray-700"
                >
                    Ghi nhớ thông tin đặt hàng của tôi
                </label>
            </div>

            <Button
                text="Đặt hàng"
                disabled={cartQuantity <= 0}
                type="submit"
            />
        </CompleteOrderFormContainer>
    )
}
