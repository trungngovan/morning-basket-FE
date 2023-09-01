import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { apiGet, apiPost } from '../apis/api'
import { AxiosError, AxiosResponse } from 'axios'
import { apiMessages } from '../utils/apiMessages'
import { isBlankObject } from '../utils'

interface AuthContextType {
    customerInfo: any
    signin: (
        username: string,
        password: string,
        remember_me: boolean
    ) => Promise<boolean>
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

const CUSTOMER_INFO_STORAGE_KEY = 'MorningBasket:customerInfo'
const ORDER_COMPLETE_INFO_STORAGE_KEY = 'MorningBasket:orderCompleteInfo'

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [customerInfo, setCustomerInfo] = useState<any>(
        isBlankObject(
            JSON.parse(
                localStorage.getItem(CUSTOMER_INFO_STORAGE_KEY) as string
            )
        )
            ? null
            : JSON.parse(
                  localStorage.getItem(CUSTOMER_INFO_STORAGE_KEY) as string
              )
    )
    const [signinNotif, setSigninNotif] = useState<string>('')
    const [signupNotif, setSignupNotif] = useState<string>('')

    const signin = async (
        username: string,
        password: string,
        remember_me: boolean
    ) => {
        return new Promise<boolean>((resolve) => {
            setTimeout(async () => {
                await apiPost<unknown, AxiosResponse>(`/customers/signin`, {
                    username: username,
                    password: password,
                    remember_me: remember_me,
                })
                    .then(async (response) => {
                        if (response) {
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

    const signout = async () => {
        setTimeout(async () => {
            await apiGet<unknown, AxiosResponse>(`/customers/signout`)
                .then((response) => {
                    if (response) {
                        setSigninNotif(apiMessages(response.data.message))
                    }
                })
                .catch((e: AxiosError<{ error: { message: string } }>) => {
                    throw e
                })
        }, 200)

        localStorage.removeItem(CUSTOMER_INFO_STORAGE_KEY)
        localStorage.removeItem(ORDER_COMPLETE_INFO_STORAGE_KEY)
        setCustomerInfo({})
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
            JSON.stringify(customerInfo ? customerInfo : {})
        )
    }, [customerInfo])

    return (
        <AuthContext.Provider
            value={{
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
