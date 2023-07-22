export type WardType = {
    name: string
    code: number
    division_type: string
    codename: string
    district_code: number
}

export type DistrictType = {
    name: string
    code: number
    division_type: string
    codename: string
    province_code: 1
    wards: WardType[]
}

export type ProvinceType = {
    name: string
    code: number
    division_type: string
    codename: string
    phone_code: number
    districts: DistrictType[]
}

export type GetProvincesResponse = ProvinceType[]
export type GetDistrictsResponse = ProvinceType
export type GetWardsResponse = DistrictType
