import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const instance = axios.create();

export const apiRequest = async <
  Data = unknown,
  Response = AxiosResponse<Data>
>(
  config: AxiosRequestConfig
): Promise<Response> => {
  const token = "";

  return instance.request({
    ...config,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Authorization: token ? `Bearer ${token}` : undefined,
      ...config.headers,
    },
  });
};

export const apiGet = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<Response> => {
  const query = params
    ? `?${Object.keys(params)
        .map((key) => (params[key] ? `${key}=${params[key]}` : ""))
        .filter(Boolean)
        .join("&")}`
    : "";

  return apiRequest<Data, Response>({
    url: `${url}${query}`,
    method: "GET",
    ...config,
  });
};

export const apiPost = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    data: data ?? null,
    method: "POST",
    ...config,
  });
};

export const apiPut = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    data: data ?? null,
    method: "PUT",
    ...config,
  });
};

export const apiPatch = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    data: data ?? null,
    method: "PATCH",
    ...config,
  });
};

export const apiDelete = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    method: "DELETE",
    ...config,
  });
};
