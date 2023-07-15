import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

const instance = axios.create()

export const apiRequest = async <
    Data = unknown,
    Response = AxiosResponse<Data>
>(
    config: AxiosRequestConfig
): Promise<Response> => {
    // Vu's token
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJIZW5yeSIsInN1YiI6IjY0YjIyNjZlMzJiMDQ3MTJhOTNhMGUwNiIsImlhdCI6MTY4OTM5NzI1NTI0MywiZXhwIjoxNjg5NjU2NDU1MjQzfQ.PT197K6sc5u9uSKpQ96ZHPhi-xsZbqoDwMBAvGdVNpc"

    return instance.request({
        ...config,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: token ? `Bearer ${token}` : undefined,
            // Only token now, no "Bearer "
            Authorization: token ? `${token}` : undefined,
            ...config.headers,
        },
    })
}

export const apiGet = async <Data = unknown, Response = AxiosResponse<Data>>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
): Promise<Response> => {
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
