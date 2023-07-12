import { RegularText, TitleText } from "../../components/Typography";
import {
  SingleProductContainer,
  ProductDetailsContainer,
  ProductImageContainer,
  OtherImagesContainer,
} from "./styles";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import Slider from "react-slick";

import { CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useState } from "react";

export function SingleProductPage() {
  const { colors } = useTheme();

  const [productImages] = useState<string[]>([
    "/coffees/americano.png",
    "/coffees/americano.png",
  ]);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <ProductImageContainer>
        <Slider {...sliderSettings}>
          {[...productImages].map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </Slider>
      </ProductImageContainer>

      <ProductDetailsContainer>
        <div>
          <TitleText size="l">{"test"}</TitleText>
          <RegularText size="l" color="subtitle">
            "test"
          </RegularText>
        </div>

        <section>
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={"brand-yellow"}
            text={
              <RegularText>
                Price
                <br />
                <strong>1</strong>
              </RegularText>
            }
          />
        </section>
      </ProductDetailsContainer>
      <OtherImagesContainer>
        {productImages.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </OtherImagesContainer>
    </div>
  );
}
