import React from 'react'
import {
    HeroContainer,
    HeroContent,
    HeroTitle,
    BenefitsContainer,
} from './styles'

import logo from '../../../../assets/logo.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import {
    PiShoppingCartFill,
    PiPackageFill,
    PiHeartbeatFill,
    PiPlantFill,
} from 'react-icons/pi'
import { useTheme } from 'styled-components'

export function Hero() {
    const { colors } = useTheme()

    return (
        <HeroContainer>
            <HeroContent className="container">
                <div>
                    <section>
                        <HeroTitle size="m">Bạn đang tìm kiếm món ăn nhẹ ngon, lành mạnh và giàu dinh dưỡng?</HeroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Chào mừng đến với{' '}
                            <a href='https://morningbasket.vn' className="text-indigo-600 hover:text-indigo-500">
                                morningbasket.vn
                            </a>!
                        </RegularText>
                    </section>

                    <BenefitsContainer>
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
                    </BenefitsContainer>
                </div>

                <div className="imageContainer">
                    <img src={logo} alt="" />
                </div>
            </HeroContent>
        </HeroContainer>
    )
}
