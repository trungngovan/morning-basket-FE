import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
    state: OrderData
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
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Yay! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle">
                    Now just wait for your coffee to arrive soon
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        iconColor={colors['brand-purple']}
                        text={
                            <RegularText>
                                Delivery to
                                <strong>
                                    {state.street}, {state.number}
                                </strong>
                                <br />
                                {state.district} - {state.city}, {state.uf}
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<Clock weight="fill" />}
                        iconColor={colors['brand-yellow']}
                        text={
                            <RegularText>
                                Delivery estimate
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        iconColor={colors['brand-yellow-dark']}
                        text={
                            <RegularText>
                                Payment on delivery
                                <br />
                                <strong>
                                    {paymentMethods[state.paymentMethod].label}
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
