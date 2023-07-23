import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'
import { PiShoppingCartFill } from 'react-icons/pi'
import LogoImage from '../../assets/logo@100-63.png'
import { useAuth } from '../../hooks/useAuth'
const CUSTOMER_NAME_STORAGE_KEY = 'MorningBasket:customerName'
export function Header() {
    const { cartQuantity } = useCart()
    const { isAuthenticated, signout } = useAuth()
    const nameCustomer = localStorage.getItem(CUSTOMER_NAME_STORAGE_KEY)
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={LogoImage} alt="" />
                </NavLink>

                <div className="h-10">
                    <HeaderButtonsContainer>
                        {/* <NavLink to="/faq">
                            <HeaderButton variant="purple">FAQ</HeaderButton>
                        </NavLink>
                        <NavLink to="/aboutUs">
                            <HeaderButton variant="yellow">
                                Về Chúng Tôi
                            </HeaderButton>
                        </NavLink>
                        <NavLink to="/contact">
                            <HeaderButton variant="purple">
                                Liên hệ
                            </HeaderButton>
                        </NavLink> */}
                        {!isAuthenticated && (
                            <NavLink to="/signin">
                                <HeaderButton variant="yellow">
                                    Đăng nhập
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
                                <PiShoppingCartFill size={30} />
                            </HeaderButton>
                        </NavLink>
                    </HeaderButtonsContainer>
                    {isAuthenticated && (
                        <p className="mt-2 text-sm leading-6 text-gray-500 text-right">
                            Hi, {nameCustomer}!{' '}
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
