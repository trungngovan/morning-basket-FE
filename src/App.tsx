import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { AuthContextProvider } from './contexts/AuthContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <CartContextProvider>
                    <AuthContextProvider>
                        <Router />
                    </AuthContextProvider>
                </CartContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}
