import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'
import { ShoppingCart } from 'phosphor-react'
import LogoImage from '../../assets/morning-basket-logo-Truc-100-63.png'
import { useAuth } from '../../hooks/useAuth'
export function Header() {
    const { cartQuantity } = useCart()
    const { isAuthenticated, customerName, signout } = useAuth()

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={LogoImage} alt="" />
                </NavLink>

                <div className="h-10">
                    <HeaderButtonsContainer>
                        <NavLink to="/faq">
                            <HeaderButton variant="purple">FAQ</HeaderButton>
                        </NavLink>
                        <NavLink to="/aboutUs">
                            <HeaderButton variant="yellow">
                                About Us
                            </HeaderButton>
                        </NavLink>
                        <NavLink to="/contact">
                            <HeaderButton variant="purple">
                                Contact
                            </HeaderButton>
                        </NavLink>
                        {!isAuthenticated && (
                            <NavLink to="/signin">
                                <HeaderButton variant="yellow">
                                    Sign In
                                </HeaderButton>
                            </NavLink>
                        )}
                        {/* <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Ho Chi Minh, VN
          </HeaderButton> */}
                        <NavLink to="/completeOrder">
                            <HeaderButton variant="yellow">
                                {cartQuantity >= 1 && (
                                    <span>{cartQuantity}</span>
                                )}
                                <ShoppingCart size={30} weight="fill" />
                            </HeaderButton>
                        </NavLink>
                    </HeaderButtonsContainer>
                    {isAuthenticated && (
                        <p className="mt-2 text-sm leading-6 text-gray-500 text-right">
                            Hi, {customerName}!{' '}
                            <a
                                href=""
                                className="font-semibold text-red-500 hover:text-red-300"
                                onClick={() => {
                                    signout()
                                    window.location.reload()
                                }}
                            >
                                Sign out
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </HeaderContainer>
    )
}
