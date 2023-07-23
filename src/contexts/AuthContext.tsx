import React, { ReactNode, createContext, useState } from 'react'
import { apiPost } from '../apis/api'
import { AxiosResponse } from 'axios'

interface AuthContextType {
    isAuthenticated: boolean
    customerName: string
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
const CUSTOMER_NAME_STORAGE_KEY = 'MorningBasket:customerName'

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>(() =>
        localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
    )
    const [customerName, setCustomerName] = useState<string>('')
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
        authToken ? true : false
    )

    const signin = async (
        username: string,
        password: string
    ): Promise<boolean> => {
        try {
            const response = await apiPost<unknown, AxiosResponse>(
                `/customers/signin`,
                {
                    username: username,
                    password: password,
                }
            )
            if (response && response.status === 200) {
                const newAuthToken = response.data.token
                const newCustomerName = response.data.name
                localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, newAuthToken)
                setAuthToken(newAuthToken)
                setCustomerName(newCustomerName)
                setIsAuthenticated(true)
                localStorage.setItem(CUSTOMER_NAME_STORAGE_KEY, newCustomerName)
                return true
            }
        } catch (error) {
            console.error(error)
        }
        return false
    }

    const signout = () => {
        localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
        localStorage.removeItem(CUSTOMER_NAME_STORAGE_KEY)
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
                console.log('Signup successful')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                customerName,
                signin,
                signout,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
