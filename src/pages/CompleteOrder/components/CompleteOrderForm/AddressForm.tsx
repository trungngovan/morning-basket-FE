import React, { useEffect, useState } from 'react'
import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import {
    ProvinceType,
    DistrictType,
    WardType,
} from '../../../../@types/provinces'
import { getDistricts, getWards } from '../../../../apis/provinces'
import { Input } from '../../../../components/Input'
import { SelectMunicipality } from '../../../../components/SelectMunicipality'
import { getProvinces } from '../../../../apis/provinces'

export function AddressForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    const [curProv, setCurProv] = useState<ProvinceType>()
    const [provinces, setProvinces] = useState<ProvinceType[]>()
    const [districts, setDistricts] = useState<DistrictType[]>()
    const [wards, setWards] = useState<WardType[] | null>()

    useEffect(() => {
        getProvinces()
            .then((response) => {
                setProvinces(response)
            })
            .catch(() => null)
    }, [])

    const handleProvChange = async (value: string) => {
        const newProv = (provinces as ProvinceType[]).find(
            (province) => province.name === value
        )
        setCurProv(newProv)
        await getDistricts({ provinceCode: (newProv as ProvinceType).code })
            .then(async (response) => {
                setDistricts(response)
                setWards(null)
            })
            .catch(() => null)
    }

    const handleDistChange = async (value: string) => {
        const newDist = (districts as DistrictType[]).find(
            (district) => district.name === value
        )
        await getWards({
            provinceCode: (curProv as ProvinceType).code,
            districtCode: (newDist as DistrictType).code,
        })
            .then((response) => {
                setWards(response)
            })
            .catch(() => null)
    }

    const provinceField = register('province')
    const districtField = register('district')
    const wardField = register('ward')

    return (
        <AddressFormContainer>
            <div className="row">
                <Input
                    placeholder="Số nhà, Tên Đường"
                    className="number_street"
                    {...register('number_street')}
                    error={errors?.number_street?.message as string}
                />
            </div>
            <div className="row">
                <SelectMunicipality
                    className="province"
                    {...provinceField}
                    error={errors?.province?.message as string}
                    options={
                        provinces?.map((province) => province.name) as string[]
                    }
                    onChange={(e) => {
                        provinceField.onChange(e)
                        handleProvChange(e.target.value)
                    }}
                />
                <SelectMunicipality
                    className="district"
                    {...districtField}
                    error={errors?.district?.message as string}
                    options={
                        districts?.map((district) => district.name) as string[]
                    }
                    onChange={(e) => {
                        districtField.onChange(e)
                        handleDistChange(e.target.value)
                    }}
                />
                <SelectMunicipality
                    className="ward"
                    {...wardField}
                    error={errors?.ward?.message as string}
                    options={wards?.map((ward) => ward.name) as string[]}
                />
            </div>
            <div className="row">
                <Input
                    placeholder="Lưu ý"
                    className="note"
                    {...register('note')}
                    error={errors?.note?.message as string}
                    rightText="Không bắt buộc"
                />
            </div>
        </AddressFormContainer>
    )
}
