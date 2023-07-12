import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
} from "./styles";

// import heroImage from "../../../../assets/hero-image.png";
import logoTruc from "../../../../assets/morning-basket-logo-Truc.png";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Hero() {
  const { colors } = useTheme();

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Morning Basket
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Welcome to morning-basket.vn!
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
            />
            <InfoWithIcon
              iconColor={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
            />
            <InfoWithIcon
              iconColor={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
            />
            <InfoWithIcon
              iconColor={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="Lorem ipsum dolosit amet Lorem ipsum dolosit amet Lorem ipsum dolosit amet..."
            />
          </BenefitsContainer>
        </div>

        <div className="imageContainer">
          <img src={logoTruc} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  );
}
