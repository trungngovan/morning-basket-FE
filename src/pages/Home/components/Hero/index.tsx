import React from 'react'
import { HeroTitle } from './styles'
import home from '../../../../assets/Home.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import {
    PiShoppingCartFill,
    PiPackageFill,
    PiHeartbeatFill,
    PiPlantFill,
} from 'react-icons/pi'
import { useTheme } from 'styled-components'
import heroBackgroundImage from '../../../../assets/hero-background.png'

export function Hero() {
    const { colors } = useTheme()
    return (
        <section
            className="w-full flex items-center justify-center bg-no-repeat bg-center bg-auto"
            style={{ background: `url(${heroBackgroundImage})` }}
        >
            <div className="container p-4 flex items-center justify-between gap-4 flex-col-reverse md:gap-[3.5rem] md:flex-row">
                <div className="flex-1">
                    <section>
                        <HeroTitle size="m">
                            Bạn đang tìm kiếm món ăn nhẹ ngon, lành mạnh và giàu
                            dinh dưỡng?
                        </HeroTitle>
                        <RegularText
                            size="l"
                            color="subtitle"
                            as="h3"
                            className="mb-4"
                        >
                            Chào mừng bạn đến với{' '}
                            <a
                                href="https://mama-shop-fe.vercel.app/"
                                className="text-indigo-600 hover:text-indigo-500"
                            >
                                mamashop.vn
                            </a>
                            !
                        </RegularText>
                    </section>

                    <div className="w-100 grid gap-5 grid-cols-[1fr] md:grid-cols-[1fr_1fr]">
                        <InfoWithIcon
                            iconColor={colors['brand-green']}
                            icon={<PiPlantFill />}
                            text="Tự nhiên và bổ dưỡng"
                        />
                        <InfoWithIcon
                            iconColor={colors['brand-yellow-dark']}
                            icon={<PiPackageFill />}
                            text="An toàn và vệ sinh"
                        />
                        <InfoWithIcon
                            iconColor={colors['brand-purple-dark']}
                            icon={<PiShoppingCartFill />}
                            text="Đa dạng, đầy đủ, chiều chuộng mọi khẩu vị"
                        />
                        <InfoWithIcon
                            iconColor={colors['brand-red']}
                            icon={<PiHeartbeatFill />}
                            text="Hơn cả ngon, hãy tận hưởng!"
                        />
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <img src={home} alt="" className="w-full lg:w-96" />
                </div>
            </div>
        </section>
    )
}
