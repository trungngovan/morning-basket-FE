import React from 'react'
import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'

import {
    PiMapPinLine,
    PiClockFill,
    PiCurrencyDollar,
    PiHandbag,
} from 'react-icons/pi'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { PaymentMethodType, OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
    state: any
}

export function OrderConfirmedPage() {
    const { colors } = useTheme()

    const { state } = useLocation() as LocationType

    const navigate = useNavigate()

    useEffect(() => {
        if (!state) {
            navigate('/', { state: { reload: true } })
        }
    }, [])

    if (!state) return <></>

    return (
        <OrderConfirmedContainer className="container py-8 my-8">
            <div>
                <TitleText size="l">Đơn hàng đã được ghi nhận</TitleText>
                <RegularText size="l" color="subtitle">
                    Chúng tôi sẽ liên hệ với quý khách trong vòng 24 tiếng để
                    xác nhận đơn hàng!
                </RegularText>
                <RegularText className="my-2" size="s" color="subtitle">
                    <a
                        href="/faq#payment"
                        className="text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        Làm sao để thanh toán?
                    </a>
                    <br />
                    <a
                        href="/faq#orderConfirm"
                        className="text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        Làm sao tôi biết đơn hàng đã được xác nhận chưa?
                    </a>
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoWithIcon
                        icon={<PiHandbag />}
                        iconColor={colors['brand-yellow']}
                        text={
                            <RegularText>
                                Mã đơn hàng
                                <br />
                                <strong>
                                    {' '}
                                    {state.id ? state.id : 'Không có'}
                                </strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<PiMapPinLine />}
                        iconColor={colors['brand-purple']}
                        text={
                            <RegularText>
                                Địa chỉ giao hàng
                                <br />
                                <strong> {state.shippingAddress}</strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<PiClockFill />}
                        iconColor={colors['brand-yellow']}
                        text={
                            <RegularText>
                                Thời gian xác nhận
                                <br />
                                <strong>Trong vòng 24 giờ</strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<PiCurrencyDollar />}
                        iconColor={colors['brand-yellow-dark']}
                        text={
                            <RegularText>
                                Phương thức thanh toán
                                <br />
                                <strong>
                                    {
                                        paymentMethods[
                                            state.paymentMethod as PaymentMethodType
                                        ].label
                                    }
                                </strong>
                            </RegularText>
                        }
                    />
                </OrderDetailsContainer>

                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}
