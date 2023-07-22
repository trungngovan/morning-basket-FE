import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { Home } from './pages/Home'
import AboutUsPage from './pages/AboutUs'
import ContactPage from './pages/Contact'
import FAQPage from './pages/FAQ'
import { SignInPage } from './pages/SignIn'
import { SignUpPage } from './pages/SignUp'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmedPage } from './pages/OrderConfirmed'
import { ProductDetail } from './pages/ProductDetail'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route
                    path="/orderConfirmed"
                    element={<OrderConfirmedPage />}
                />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
        </Routes>
    )
}
