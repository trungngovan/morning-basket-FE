import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import {
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderButton,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoImage from "../../assets/logo.svg";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={LogoImage} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <NavLink to="/pre-order">
            <HeaderButton variant="yellow">PRE-ORDER</HeaderButton>
          </NavLink>
          <NavLink to="/lounge-menu">
            <HeaderButton variant="purple">LOUNGE MENU</HeaderButton>
          </NavLink>
          <NavLink to="/hamper">
            <HeaderButton variant="yellow">HAMPER</HeaderButton>
          </NavLink>
          <NavLink to="/our-stores">
            <HeaderButton variant="purple">OUR STORES</HeaderButton>
          </NavLink>
          <NavLink to="/about-us">
            <HeaderButton variant="yellow">ABOUT US</HeaderButton>
          </NavLink>
          {/* <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Ho Chi Minh, VN
          </HeaderButton> */}
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={30} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
