/* eslint-disable no-unused-vars */
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedProducts'
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
    cep: zod.string().min(1, 'Please provide a valid CEP'),
    street: zod.string().min(1, 'Please provide a valid street name'),
    number: zod.string().min(1, 'Please provide a valid house number'),
    complement: zod.string(),
    district: zod.string().min(1, 'Please provide a valid district name'),
    city: zod.string().min(1, 'Please provide a valid city name'),
    uf: zod.string().min(1, 'Please provide a valid state/region name'),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: 'Please select a payment method' }
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
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}
