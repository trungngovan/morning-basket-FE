/* eslint-disable no-unused-vars */
import React from 'react'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedProducts } from './components/SelectedProducts'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
    number_street: zod.string().min(1, 'Vui lòng nhập số nhà và tên đường'),
    ward: zod.string().min(1, 'Vui lòng chọn Phường/Xã/Thị trấn'),
    district: zod.string().min(1, 'Vui lòng chọn Quận/Huyện'),
    province: zod.string().min(1, 'Vui lòng chọn Tỉnh/Thành phố'),
    note: zod.string(),
    // zipcode: zod.string().min(1, 'Vui lòng nhập mã ZIP'),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: 'Vui lòng chọn phương thức thanh toán' }
        },
    }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        defaultValues: {
            paymentMethod: undefined,
        },
    })

    const { handleSubmit } = confirmOrderForm

    const navigate = useNavigate()
    const { cleanCart } = useCart()

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate('/orderConfirmed', {
            state: data,
        })
        cleanCart()
    }

    return (
        <>
            <FormProvider {...confirmOrderForm}>
                <CompleteOrderContainer
                    className="container"
                    onSubmit={handleSubmit(handleConfirmOrder)}
                >
                    <CompleteOrderForm />
                    <SelectedProducts />
                </CompleteOrderContainer>
            </FormProvider>
        </>
    )
}
