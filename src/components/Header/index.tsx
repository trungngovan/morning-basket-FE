import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'
import { PiShoppingCartFill } from 'react-icons/pi'
import LogoImage from '../../assets/logo@100-63.png'
import { useAuth } from '../../hooks/useAuth'
export function Header() {
    const { cartQuantity } = useCart()
    const { customerInfo, isAuthenticated, signout } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated && window.location.pathname != "/") {
            navigate('/', { replace: true })
        }
    }, [isAuthenticated])

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={LogoImage} alt="" />
                </NavLink>
                <div className="h-10 flex">
                    {isAuthenticated && (
                        <p className="mt-2 mr-1 text-sm leading-6 text-gray-500 text-right">
                            Xin chào, <span className='font-bold'>{customerInfo.name}</span>!{' '}
                        </p>
                    )}
                    <HeaderButtonsContainer>
                        {!isAuthenticated ?
                            <NavLink to="/signin">
                                <HeaderButton variant="yellow">
                                    Đăng nhập
                                </HeaderButton>
                            </NavLink>
                            :
                            <NavLink to="/" onClick={() => {
                                signout()
                            }}>
                                <HeaderButton variant="red">
                                    Đăng xuất
                                </HeaderButton>
                            </NavLink>
                        }
                        <NavLink to="/completeOrder">
                            <HeaderButton variant="purple">
                                {cartQuantity >= 1 && (
                                    <span>{cartQuantity}</span>
                                )}
                                <PiShoppingCartFill size={30} />
                            </HeaderButton>
                        </NavLink>
                    </HeaderButtonsContainer>

                </div>
            </div>
        </HeaderContainer>
    )
}
