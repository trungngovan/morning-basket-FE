import React from 'react'
import { PiBank, PiCreditCard, PiMoney } from 'react-icons/pi'
import { PaymentMethodInput } from '../PaymentMethodInput'
import {
    PaymentMethodOptionsContainer,
    PaymentMethodOptionsWrapper,
} from './styles'

import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'

export const paymentMethods = {
    credit: {
        label: 'Credit Card',
        icon: <PiCreditCard size={16} />,
    },
    debit: {
        label: 'Bank',
        icon: <PiBank size={16} />,
    },
    money: {
        label: 'Money',
        icon: <PiMoney size={16} />,
    },
}

export function PaymentMethodOptions() {
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
