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
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Hero() {
    const { colors } = useTheme()

    return (
        <HeroContainer>
            <HeroContent className="container">
                <div>
                    <section>
                        <HeroTitle size="xl">Morning Basket</HeroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Welcome to morningbasket.vn!
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                        <InfoWithIcon
                            iconColor={colors['brand-yellow-dark']}
                            icon={<ShoppingCart weight="fill" />}
                            text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
                        />
                        <InfoWithIcon
                            iconColor={colors['base-text']}
                            icon={<Package weight="fill" />}
                            text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
                        />
                        <InfoWithIcon
                            iconColor={colors['brand-yellow']}
                            icon={<Timer weight="fill" />}
                            text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
                        />
                        <InfoWithIcon
                            iconColor={colors['brand-purple']}
                            icon={<Coffee weight="fill" />}
                            text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
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
