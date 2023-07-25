import React from 'react'
import { PiBank, PiCreditCard, PiMoney } from 'react-icons/pi'
import { PaymentMethodInput } from '../PaymentMethodInput'
import {
    PaymentMethodOptionsContainer,
    PaymentMethodOptionsWrapper,
} from './styles'

import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'
import { OrderData } from '../..'

interface Props {
    defaultValues: OrderData
}

export const paymentMethods = {
    credit: {
        label: 'Thẻ tín dụng',
        icon: <PiCreditCard size={16} />,
    },
    debit: {
        label: 'Ngân hàng',
        icon: <PiBank size={16} />,
    },
    cash: {
        label: 'Tiền mặt',
        icon: <PiMoney size={16} />,
    },
}

export function PaymentMethodOptions({ defaultValues }: Props) {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const paymentMethodError = errors?.paymentMethod?.message as string

    return (
        <PaymentMethodOptionsWrapper>
            <PaymentMethodOptionsContainer>
                {Object.entries(paymentMethods).map(
                    ([key, { label, icon }]) => (
                        <PaymentMethodInput
                            key={label}
                            id={key}
                            icon={icon}
                            label={label}
                            value={key}
                            defaultChecked={
                                defaultValues
                                    ? defaultValues.paymentMethod === key
                                    : false
                            }
                            {...register('paymentMethod')}
                        />
                    )
                )}
            </PaymentMethodOptionsContainer>
            {paymentMethodError && (
                <RegularText>{paymentMethodError}</RegularText>
            )}
        </PaymentMethodOptionsWrapper>
    )
}
