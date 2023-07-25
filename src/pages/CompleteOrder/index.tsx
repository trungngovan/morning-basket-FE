/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedProducts } from './components/SelectedProducts'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth'
import { OrderNotSignedIn } from '../../components/OrderNotSignedIn'

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    cash = 'cash',
}
const ORDER_COMPLETE_INFO_STORAGE_KEY = 'MorningBasket:orderCompleteInfo'
const storedOrderCompleteInfo = JSON.parse(
    localStorage.getItem(ORDER_COMPLETE_INFO_STORAGE_KEY) as string
)

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

export type PaymentMethodType = PaymentMethods
export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        defaultValues: {
            paymentMethod: undefined,
        },
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const navigate = useNavigate()
    const { isOrderReceived, orderData, sendOrder, cleanCart } = useCart()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        document.title = 'Complete Order - Morning Basket'
        if (isOrderReceived) {
            navigate('/orderConfirmed', { state: orderData, replace: true })
        }
    }, [isOrderReceived, orderData])

    const handleConfirmOrder = async (data: ConfirmOrderFormData) => {
        if (isAuthenticated) {
            setIsSubmitting(true)
            await sendOrder(data)
            setIsSubmitting(false)
            cleanCart()
        } else {
            setShowModal(true)
        }
    }

    const handleModalProceed = () => {
        localStorage.setItem(
            ORDER_COMPLETE_INFO_STORAGE_KEY,
            JSON.stringify(confirmOrderForm.getValues())
        )
        navigate('/signin')
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <FormProvider {...confirmOrderForm}>
                <CompleteOrderContainer
                    className="container"
                    onSubmit={confirmOrderForm.handleSubmit(handleConfirmOrder)}
                >
                    <SelectedProducts />
                    <CompleteOrderForm
                        defaultValues={storedOrderCompleteInfo}
                    />
                </CompleteOrderContainer>
            </FormProvider>
            {showModal && (
                <OrderNotSignedIn
                    onProceed={handleModalProceed}
                    onClose={handleModalClose}
                ></OrderNotSignedIn>
            )}
        </>
    )
}
