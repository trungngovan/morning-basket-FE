import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { HeaderButton } from './styles'
import { PiShoppingCartFill } from 'react-icons/pi'
import LogoImage from '../../assets/logo@100-63.png'
import { useAuth } from '../../hooks/useAuth'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
    const { cartQuantity } = useCart()
    const { customerInfo, signout } = useAuth()
    return (
        <header
            className="w-full h-[5rem] m-auto flex items-center justify-center sticky top-0 left-0 z-[5]"
            style={{ background: defaultTheme.colors['base-background'] }}
        >
            <div className="container w-full px-4 flex items-center justify-between">
                <NavLink to="/">
                    <img src={LogoImage} alt="" />
                </NavLink>
                <div className="flex flex-col items-end gap-2">
                    {customerInfo && (
                        <p className="text-sm text-gray-500">
                            Xin chào,{' '}
                            <span className="font-bold">
                                {customerInfo.name}
                            </span>
                            !{' '}
                        </p>
                    )}
                    <div className="flex items-center gap-3">
                        {!customerInfo ? (
                            <NavLink to="/signin">
                                <HeaderButton variant="yellow">
                                    Đăng nhập
                                </HeaderButton>
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/"
                                reloadDocument={true}
                                onClick={signout}
                            >
                                <HeaderButton variant="red">
                                    Đăng xuất
                                </HeaderButton>
                            </NavLink>
                        )}
                        <NavLink to="/completeOrder">
                            <HeaderButton variant="purple">
                                <PiShoppingCartFill size={30} />
                                {cartQuantity >= 1 ? (
                                    <span>{cartQuantity}</span>
                                ) : (
                                    <span
                                        style={{ background: 'transparent' }}
                                    ></span>
                                )}
                            </HeaderButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}
