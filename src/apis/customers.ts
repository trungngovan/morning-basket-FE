import { AxiosResponse } from 'axios'
import { apiPost } from './api'

interface Props {
    username: string
    password: string
}

export const signIn = async ({ username, password }: Props) => {
    const authToken = localStorage.getItem('MorningBasket:authToken') as string
    if (!authToken) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                apiPost<object, AxiosResponse>(`/customers/signin`, {
                    username: username,
                    password: password,
                }).then((response) => {
                    if (response) {
                        localStorage.setItem(
                            'MorningBasket:authToken',
                            response.data.token
                        )
                        resolve(response.data.token)
                    }
                })
            }, 200)
        })
    }
    return authToken
}
