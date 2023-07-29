import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { apiGet, apiPost } from '../apis/api'
import { AxiosError, AxiosResponse } from 'axios'
import { apiMessages } from '../utils/apiMessages'

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
    ) => Promise<boolean>
    signinNotif: string
    signupNotif: string
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
        const storedCustomerInfo = localStorage.getItem(
            CUSTOMER_INFO_STORAGE_KEY
        )

        if (storedCustomerInfo) {
            return JSON.parse(storedCustomerInfo)
        }

        return {}
    })
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
        authToken ? true : false
    )
    const [signinNotif, setSigninNotif] = useState<string>('')
    const [signupNotif, setSignupNotif] = useState<string>('')

    const signin = async (username: string, password: string) => {
        return new Promise<boolean>((resolve) => {
            setTimeout(async () => {
                await apiPost<unknown, AxiosResponse>(`/customers/signin`, {
                    username: username,
                    password: password,
                })
                    .then(async (response) => {
                        if (response) {
                            const newAuthToken = response.data.token
                            localStorage.setItem(
                                AUTH_TOKEN_STORAGE_KEY,
                                newAuthToken
                            )
                            setAuthToken(newAuthToken)
                            await apiGet<unknown, AxiosResponse>(
                                `/customers/info`
                            ).then((response1) => {
                                if (response1) {
                                    const newCustomerInfo =
                                        response1.data.customer
                                    setCustomerInfo(newCustomerInfo)
                                    localStorage.setItem(
                                        CUSTOMER_INFO_STORAGE_KEY,
                                        JSON.stringify(newCustomerInfo)
                                    )
                                }
                            })
                            setIsAuthenticated(true)
                            setSigninNotif(apiMessages(response.data.message))
                            resolve(true)
                        }
                    })
                    .catch((e: AxiosError<{ error: { message: string } }>) => {
                        const customErrCode = e.response?.data?.error
                            ?.message as string
                        const customerErrMsg = apiMessages(customErrCode)
                        setSigninNotif(
                            customerErrMsg.includes('<DETAIL>')
                                ? customerErrMsg.replace('<DETAIL>', username)
                                : customerErrMsg
                        )
                        resolve(false)
                    })
            }, 200)
        })
    }

    const signout = () => {
        localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
        localStorage.removeItem(CUSTOMER_INFO_STORAGE_KEY)
        localStorage.removeItem('MorningBasket:orderCompleteInfo')
        setAuthToken(null)
        setIsAuthenticated(false)
    }

    const signup = async (
        name: string,
        phoneNumber: string,
        email: string,
        password: string
    ) => {
        return new Promise<boolean>((resolve, rejects) => {
            setTimeout(async () => {
                await apiPost<unknown, AxiosResponse>(`/customers/signup`, {
                    name: name,
                    phoneNumber: phoneNumber,
                    email: email,
                    password: password,
                })
                    .then((response) => {
                        if (response) {
                            setSignupNotif(apiMessages(response.data.message))
                            resolve(true)
                        }
                    })
                    .catch((e: AxiosError<{ error: { message: string } }>) => {
                        const customErrCode = e.response?.data?.error
                            ?.message as string
                        const customerErrMsg = apiMessages(customErrCode)
                        setSignupNotif(
                            customerErrMsg.includes('<DETAIL>')
                                ? customerErrMsg.replace(
                                    '<DETAIL>',
                                    customErrCode.includes('PHONE')
                                        ? phoneNumber
                                        : email
                                )
                                : customerErrMsg
                        )
                        rejects()
                    })
            }, 200)
        })
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
                signinNotif,
                signupNotif,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
