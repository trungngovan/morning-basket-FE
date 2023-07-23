import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { LayoutContainer } from './styles'
import heroBackgroundImage from '../../assets/hero-background.png'

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <div
                className="bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            >
                <Outlet />
            </div>
            <Footer />
        </LayoutContainer>
    )
}
