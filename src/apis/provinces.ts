import {
    GetProvincesResponse,
    GetDistrictsResponse,
    GetWardsResponse,
    DistrictType,
    WardType,
} from '../@types/provinces'
import { vnProvincesApiGet } from '../apis/api'

type Props = {
    provinceCode: number
    districtCode?: number
}

const PROVINCES_STORAGE_KEY = 'MorningBasket:provinces'
export const getProvinces = async () => {
    const cachedProvinces = localStorage.getItem(PROVINCES_STORAGE_KEY)
    if (!cachedProvinces) {
        return new Promise<GetProvincesResponse>((resolve) => {
            setTimeout(() => {
                vnProvincesApiGet<GetProvincesResponse>('/?depth=2').then(
                    (response) => {
                        if (response) {
                            const result = response.data.map((a) =>
                                a.name.startsWith('Tỉnh')
                                    ? {
                                          ...a,
                                          name: a.name.replace('Tỉnh ', ''),
                                      }
                                    : a
                            )
                            localStorage.setItem(
                                PROVINCES_STORAGE_KEY,
                                JSON.stringify(result)
                            )
                            resolve(result)
                        }
                    }
                )
            }, 200)
        })
    }
    return JSON.parse(cachedProvinces)
}

export const getDistricts = async ({ provinceCode }: Props) => {
    const cachedProvinces = JSON.parse(
        localStorage.getItem(PROVINCES_STORAGE_KEY) as string
    )
    const cachedCurProv = cachedProvinces.find(
        (province: { code: number }) => province.code === provinceCode
    )
    if (!cachedCurProv) {
        return new Promise<DistrictType[]>((resolve) => {
            setTimeout(() => {
                vnProvincesApiGet<GetDistrictsResponse>(
                    `/p/${provinceCode}?depth=2`
                ).then((response) => {
                    if (response) {
                        const result = response.data.districts
                        localStorage.setItem(
                            PROVINCES_STORAGE_KEY,
                            JSON.stringify(
                                cachedProvinces.map(
                                    (province: {
                                        code: number
                                        districts: DistrictType[]
                                    }) => {
                                        if (province.code === provinceCode) {
                                            province.districts = result
                                        }
                                        return province
                                    }
                                )
                            )
                        )
                        resolve(result)
                    }
                })
            }, 200)
        })
    }
    return cachedCurProv.districts
}

export const getWards = async ({ provinceCode, districtCode }: Props) => {
    const cachedProvinces = JSON.parse(
        localStorage.getItem(PROVINCES_STORAGE_KEY) as string
    )
    const cachedDisttricts = cachedProvinces.find(
        (province: { code: number }) => province.code === provinceCode
    ).districts
    const cachedCurDist = cachedDisttricts.find(
        (district: { code: number }) => district.code === districtCode
    )

    if (cachedCurDist.wards.length == 0) {
        return new Promise<WardType[]>((resolve) => {
            setTimeout(() => {
                vnProvincesApiGet<GetWardsResponse>(
                    `/d/${districtCode}?depth=2`
                ).then((response) => {
                    if (response) {
                        const result = response.data.wards
                        localStorage.setItem(
                            PROVINCES_STORAGE_KEY,
                            JSON.stringify(
                                cachedProvinces.map(
                                    (province: {
                                        code: number
                                        districts: DistrictType[]
                                    }) => {
                                        if (province.code === provinceCode) {
                                            province.districts =
                                                province.districts.map(
                                                    (
                                                        district: DistrictType
                                                    ) => {
                                                        if (
                                                            district.code ===
                                                            districtCode
                                                        ) {
                                                            district.wards =
                                                                result
                                                        }
                                                        return district
                                                    }
                                                )
                                        }
                                        return province
                                    }
                                )
                            )
                        )
                        resolve(result)
                    }
                })
            }, 200)
        })
    }
    return cachedCurDist.wards
}
