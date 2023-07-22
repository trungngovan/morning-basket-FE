import React, { ReactNode, createContext, useState } from 'react'
import { apiPost } from '../apis/api'
import { AxiosResponse } from 'axios'

interface AuthContextType {
    isAuthenticated: boolean
    customerName: string
    signin: (username: string, password: string) => void
    signout: () => void
    signup: (
        name: string,
        phoneNumber: string,
        email: string,
        password: string
    ) => void
}

interface AuthContextProviderProps {
    children: ReactNode
}

const AUTH_TOKEN_STORAGE_KEY = 'MorningBasket:authToken'

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>(() =>
        localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
    )
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
        authToken ? true : false
    )
    const [customerName, setCustomerName] = useState<string>('')
    const signin = async (username: string, password: string) => {
        await apiPost<unknown, AxiosResponse>(`/customers/signin`, {
            username: username,
            password: password,
        }).then((response) => {
            const newAuthToken = (response as AxiosResponse).data.token
            const newCustomerName = (response as AxiosResponse).data.name
            localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, newAuthToken)
            setAuthToken(newAuthToken)
            setIsAuthenticated(true)
            setCustomerName(newCustomerName)
        })
    }

    const signout = () => {
        if (isAuthenticated) {
            localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
            setAuthToken(null)
            setIsAuthenticated(false)
        }
    }

    const signup = async (
        name: string,
        phoneNumber: string,
        email: string,
        password: string
    ) => {
        await apiPost<unknown, AxiosResponse>(`/customers/signup`, {
            name: name,
            phoneNumber: phoneNumber,
            password: password,
        }).then(() => {})
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
