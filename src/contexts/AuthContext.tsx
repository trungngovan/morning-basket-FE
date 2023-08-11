import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { apiGet, apiPost } from '../apis/api'
import { AxiosError, AxiosResponse } from 'axios'
import { apiMessages } from '../utils/apiMessages'
import { deleteCookie, getCookie, setCookie } from '../utils/cookies'

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
        getCookie(AUTH_TOKEN_STORAGE_KEY)
    )
    const [customerInfo, setCustomerInfo] = useState<any>(() => {
        const storedCustomerInfo = getCookie(CUSTOMER_INFO_STORAGE_KEY)

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
                            setCookie(
                                AUTH_TOKEN_STORAGE_KEY,
                                newAuthToken,
                                24 * 3 // 3 days
                            )
                            setAuthToken(newAuthToken)
                            await apiGet<unknown, AxiosResponse>(
                                `/customers/info`
                            ).then((response1) => {
                                if (response1) {
                                    const newCustomerInfo =
                                        response1.data.customer
                                    setCustomerInfo(newCustomerInfo)
                                    setCookie(
                                        CUSTOMER_INFO_STORAGE_KEY,
                                        JSON.stringify(newCustomerInfo),
                                        24 * 3 // 3 days
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
        deleteCookie(AUTH_TOKEN_STORAGE_KEY)
        deleteCookie(CUSTOMER_INFO_STORAGE_KEY)
        deleteCookie('MorningBasket:orderCompleteInfo')
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
        setCookie(
            CUSTOMER_INFO_STORAGE_KEY,
            JSON.stringify(customerInfo),
            24 * 3 // 3 days
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
