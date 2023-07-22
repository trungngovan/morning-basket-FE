import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'
import { ShoppingCart } from 'phosphor-react'
import LogoImage from '../../assets/morning-basket-logo-Truc-100-63.png'
export function Header() {
    const { cartQuantity } = useCart()

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={LogoImage} alt="" />
                </NavLink>

                <HeaderButtonsContainer>
                    <NavLink to="/faq">
                        <HeaderButton variant="purple">FAQ</HeaderButton>
                    </NavLink>
                    <NavLink to="/aboutUs">
                        <HeaderButton variant="yellow">About Us</HeaderButton>
                    </NavLink>
                    <NavLink to="/contact">
                        <HeaderButton variant="purple">Contact</HeaderButton>
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
    )
}
