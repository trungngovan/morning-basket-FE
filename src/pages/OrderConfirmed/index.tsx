import React from 'react'
import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'

import { PiMapPinLine, PiClockFill, PiCurrencyDollar, PiHandbag } from 'react-icons/pi'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { PaymentMethodType, OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'
import { stat } from 'fs'

interface LocationType {
    state: any
}

export function OrderConfirmedPage() {
    const { colors } = useTheme()

    const { state } = useLocation() as LocationType

    const navigate = useNavigate()

    useEffect(() => {
        if (!state) {
            navigate('/')
        }
    }, [])

    if (!state) return <></>

    return (
        <OrderConfirmedContainer className="container py-8 my-8">
            <div>
                <TitleText size="l">Đơn hàng đã được lưu lại</TitleText>
                <RegularText size="l" color="subtitle">
                    Vui lòng chờ đợi trong khi chúng tôi xác nhận đơn hàng
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
                                <strong> {state.id ? state.id : "Không có"}</strong>
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
                                    {paymentMethods[(state.paymentMethod as PaymentMethodType)].label}
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
