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
import { OrderData } from '../..'

interface Props {
    defaultValues: OrderData
}

export function AddressForm({ defaultValues }: Props) {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext()
    const [provinces, setProvinces] = useState<ProvinceType[]>()
    const [districts, setDistricts] = useState<DistrictType[]>()
    const [wards, setWards] = useState<WardType[] | null>()

    const provinceWatch = watch('province')
    const districtWatch = watch('district')
    const wardWatch = watch('ward')

    useEffect(() => {
        if (!provinces) {
            getProvinces()
                .then((response) => {
                    setProvinces(response)
                })
                .catch(() => null)
            setValue(
                'province',
                defaultValues ? defaultValues.province : undefined
            )
        }

        if (provinces && !districts) {
            handleProvChange(provinceWatch)
            setValue(
                'district',
                defaultValues ? defaultValues.district : undefined
            )
        }

        if (
            districts &&
            !wards &&
            (districts as DistrictType[]).find(
                (district) => district.name === districtWatch
            )
        ) {
            handleDistChange(districtWatch)
        }
    }, [provinceWatch, districtWatch, wardWatch, districts, wards])

    const handleProvChange = async (value: string) => {
        const newProv = (provinces as ProvinceType[]).find(
            (province) => province.name === value
        )
        await getDistricts({ provinceCode: (newProv as ProvinceType).code })
            .then(async (response) => {
                setDistricts(response)
                setWards(null)
            })
            .catch(() => null)
    }

    const handleDistChange = async (value: string) => {
        const prov = (provinces as ProvinceType[]).find(
            (province) => province.name === provinceWatch
        )
        const newDist = (districts as DistrictType[]).find(
            (district) => district.name === value
        )
        await getWards({
            provinceCode: (prov as ProvinceType).code,
            districtCode: (newDist as DistrictType).code,
        })
            .then((response) => {
                setWards(response)
                setValue('ward', defaultValues ? defaultValues.ward : undefined)
            })
            .catch(() => null)
    }

    return (
        <AddressFormContainer>
            <div className="row">
                <Input
                    placeholder="Số nhà, Tên Đường"
                    className="number_street"
                    defaultValue={
                        defaultValues ? defaultValues.number_street : undefined
                    }
                    {...register('number_street')}
                    error={errors?.number_street?.message as string}
                />
            </div>
            <div className="row">
                <SelectMunicipality
                    className="province"
                    value={provinceWatch}
                    error={errors?.province?.message as string}
                    options={
                        provinces?.map((province) => province.name) as string[]
                    }
                    onChange={(e) => {
                        setValue('province', e.target.value)
                        handleProvChange(e.target.value)
                    }}
                />
                <SelectMunicipality
                    className="district"
                    value={districtWatch}
                    error={errors?.district?.message as string}
                    options={
                        districts?.map((district) => district.name) as string[]
                    }
                    onChange={(e) => {
                        setValue('district', e.target.value)
                        handleDistChange(e.target.value)
                    }}
                />
                <SelectMunicipality
                    className="ward"
                    value={wardWatch}
                    error={errors?.ward?.message as string}
                    options={wards?.map((ward) => ward.name) as string[]}
                    onChange={(e) => {
                        setValue('ward', e.target.value)
                    }}
                />
            </div>
            <div className="row">
                <Input
                    placeholder="Lưu ý"
                    className="note"
                    // defaultValue={defaultValues ? defaultValues.note : undefined}
                    {...register('note')}
                    error={errors?.note?.message as string}
                    rightText="Không bắt buộc"
                />
            </div>
        </AddressFormContainer>
    )
}
