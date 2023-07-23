import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { apiGet, apiPost } from '../apis/api'
import { AxiosResponse } from 'axios'

interface AuthContextType {
    isAuthenticated: boolean
    customerInfo: any
    signin: (username: string, password: string) => Promise<boolean>
    signout: () => void
    signup: (
        name: string,
        phoneNumber: string,
        email: string,
        password: string
    ) => Promise<void>
}

interface AuthContextProviderProps {
    children: ReactNode
}

const AUTH_TOKEN_STORAGE_KEY = 'MorningBasket:authToken'
const CUSTOMER_INFO_STORAGE_KEY = 'MorningBasket:customerInfo'

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>(() =>
        localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
    )
    const [customerInfo, setCustomerInfo] = useState<any>(() => {
        const storedCustomerInfo = localStorage.getItem(CUSTOMER_INFO_STORAGE_KEY)

        if (storedCustomerInfo) {
            return JSON.parse(storedCustomerInfo)
        }

        return {}
    })
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
        authToken ? true : false
    )

    const signin = async (
        username: string,
        password: string
    ): Promise<boolean> => {
        try {
            setTimeout(async () => {
                const response = await apiPost<unknown, AxiosResponse>(
                    `/customers/signin`,
                    {
                        username: username,
                        password: password,
                    }
                )
                if (response && response.status === 200) {
                    const newAuthToken = response.data.token
                    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, newAuthToken)
                    setAuthToken(newAuthToken)
                    setIsAuthenticated(true)

                    const response1 = await apiGet<unknown, AxiosResponse>(`/customers/info`)
                    if (response1 && response1.status === 200) {
                        const newCustomerInfo = response1.data.customer
                        setCustomerInfo(newCustomerInfo)
                        localStorage.setItem(CUSTOMER_INFO_STORAGE_KEY, JSON.stringify(newCustomerInfo))
                    }

                    return true
                }
            })
        } catch (error) {
            console.error(error)
        }
        return false
    }

    const signout = () => {
        localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
        localStorage.removeItem(CUSTOMER_INFO_STORAGE_KEY)
        setAuthToken(null)
        setIsAuthenticated(false)
    }

    const signup = async (
        name: string,
        phoneNumber: string,
        email: string,
        password: string
    ): Promise<void> => {
        try {
            const response = await apiPost<unknown, AxiosResponse>(
                `/customers/signup`,
                {
                    name: name,
                    phoneNumber: phoneNumber,
                    email: email,
                    password: password,
                }
            )
            if (response && response.status === 200) {
                console.log('Sign up successfully')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        localStorage.setItem(
            CUSTOMER_INFO_STORAGE_KEY,
            JSON.stringify(customerInfo)
        )
    }, [customerInfo])

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                customerInfo,
                signin,
                signout,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
