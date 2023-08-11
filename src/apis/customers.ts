import { AxiosResponse } from 'axios'
import { apiPost } from './api'
import { getCookie, setCookie } from '../utils/cookies'

interface Props {
    username: string
    password: string
}

export const signIn = async ({ username, password }: Props) => {
    const authToken = getCookie('MorningBasket:authToken')
    if (!authToken) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                apiPost<object, AxiosResponse>(`/customers/signin`, {
                    username: username,
                    password: password,
                }).then((response) => {
                    if (response) {
                        setCookie(
                            'MorningBasket:authToken',
                            response.data.token,
                            24 * 3 // 3 days
                        )
                        resolve(response.data.token)
                    }
                })
            }, 200)
        })
    }
    return authToken
}
