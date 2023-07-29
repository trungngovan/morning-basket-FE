/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedProducts } from './components/SelectedProducts'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth'
import { OrderNotSignedIn } from '../../components/OrderNotSignedIn'

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    cash = 'cash',
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
    remember: zod.boolean()
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

    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const { sendOrder, cleanCart, orderCompleteInfo } = useCart()

    const { isAuthenticated } = useAuth()
    const location = useLocation()

    useEffect(() => {
        document.title = 'Complete Order - Morning Basket'
        if (location.state) {
            window.location.reload()
            window.history.replaceState({}, document.title)
        }
    }, [location])

    const handleConfirmOrder = async (data: ConfirmOrderFormData) => {
        if (isAuthenticated) {
            await sendOrder(data)
                .then(
                    (responseData: any) => {
                        cleanCart()
                        navigate('/orderConfirmed', { state: responseData })
                    },
                    (e: any) => {
                        console.log(e)
                    }
                )
        } else {
            setShowModal(true)
        }
    }

    const handleModalProceed = () => {
        navigate('/signin', { state: { completingOrder: true } })
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
                        defaultValues={orderCompleteInfo}
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
