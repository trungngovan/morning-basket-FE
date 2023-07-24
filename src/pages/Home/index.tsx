import React, { useEffect } from 'react'
import { OurProducts } from '../../components/OurProducts'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'
import { useLocation } from 'react-router-dom'

export function Home() {
    const location = useLocation()
    useEffect(() => {
        if (location.state) {
            window.location.reload()
            window.history.replaceState({}, document.title)
        }
    }, [location])
    return (
        <HomeContainer>
            <Hero />
            <OurProducts />
        </HomeContainer>
    )
}
