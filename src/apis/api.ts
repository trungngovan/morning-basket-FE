import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
const BASE_URL = import.meta.env.VITE_BACKEND_URL
const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
})
const vnProvincesInstance = axios.create({
    baseURL: 'https://provinces.open-api.vn/api',
})

export const apiRequest = async <
    Data = unknown,
    Response = AxiosResponse<Data>
>(
    config: AxiosRequestConfig
): Promise<Response | undefined> => {
    // Vu's token
    try {
        // const authTokenValid = localStorage.getItem('authTokenValid') as string
        const authToken = localStorage.getItem('authToken')

        return await instance.request({
            ...config,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                // Authorization: token ? `Bearer ${token}` : undefined,
                // Only token now, no "Bearer "
                Authorization: authToken,
                ...config.headers,
            },
        })
    } catch {
        // localStorage.setItem('authTokenValid', "false")
        alert('Please sign in and reload this page!')
        const phoneNumber = prompt('Phone Number')
        const password = prompt('Password')
        await instance
            .request({
                method: 'post',
                maxBodyLength: Infinity,
                url: '/customers/signin',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: 'connect.sid=s%3A7Jz-WMUHt8azEJeuX2jc_BvEHLgFrdvy.MmnxGKb%2F0%2BsX6MiSnpiwdPclQ%2BiVdOsUpvLKTd5MJIw',
                },
                data: JSON.stringify({
                    phoneNumber: phoneNumber,
                    password: password,
                }),
            })
            .then((response) => {
                // localStorage.setItem('authTokenValid', "true")
                localStorage.setItem('authToken', response.data.token)
                return response.data.token
            })
    }
}

export const apiGet = async <Data = unknown, Response = AxiosResponse<Data>>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
): Promise<Response | undefined> => {
    const query = params
        ? `?${Object.keys(params)
              .map((key) => (params[key] ? `${key}=${params[key]}` : ''))
              .filter(Boolean)
              .join('&')}`
        : ''

    return apiRequest<Data, Response>({
        url: `${url}${query}`,
        method: 'GET',
        ...config,
    })
}

export const apiPost = async <Data = unknown, Response = AxiosResponse<Data>>(
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
) => {
    return apiRequest<Data, Response>({
        url,
        data: data ?? null,
        method: 'POST',
        ...config,
    })
}

export const apiPut = async <Data = unknown, Response = AxiosResponse<Data>>(
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
) => {
    return apiRequest<Data, Response>({
        url,
        data: data ?? null,
        method: 'PUT',
        ...config,
    })
}

export const apiPatch = async <Data = unknown, Response = AxiosResponse<Data>>(
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
) => {
    return apiRequest<Data, Response>({
        url,
        data: data ?? null,
        method: 'PATCH',
        ...config,
    })
}

export const apiDelete = async <Data = unknown, Response = AxiosResponse<Data>>(
    url: string,
    config?: AxiosRequestConfig
) => {
    return apiRequest<Data, Response>({
        url,
        method: 'DELETE',
        ...config,
    })
}

export const vnProvincesApiRequest = async <
    Data = unknown,
    Response = AxiosResponse<Data>
>(
    config: AxiosRequestConfig
): Promise<Response | undefined> => {
    return await vnProvincesInstance.request({
        ...config,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: token ? `Bearer ${token}` : undefined,
            // Only token now, no "Bearer "
            // Authorization: authToken,
            ...config.headers,
        },
    })
}

export const vnProvincesApiGet = async <
    Data = unknown,
    Response = AxiosResponse<Data>
>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
): Promise<Response | undefined> => {
    const query = params
        ? `?${Object.keys(params)
              .map((key) => (params[key] ? `${key}=${params[key]}` : ''))
              .filter(Boolean)
              .join('&')}`
        : ''

    return vnProvincesApiRequest<Data, Response>({
        url: `${url}${query}`,
        method: 'GET',
        ...config,
    })
}
