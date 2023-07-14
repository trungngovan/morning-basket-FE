import React from 'react'
import { RegularText, TitleText } from '../../../../components/Typography'
import useFormatCurrency from '../../../../hooks/useFormatCurrency'

type Props = {
    oldPrice?: number
    price: number
}

const Price = ({ oldPrice, price }: Props) => {
    const format = useFormatCurrency()

    return (
        <div className="p-6 rounded-2xl flex gap-4 bg-gray-100 items-center">
            {oldPrice !== undefined && (
                <div className="text-gray-600 text-xl items-center">
                    <TitleText
                        size="m"
                        color="text"
                        as="strong"
                        className="line-through"
                    >
                        {`${format(oldPrice)}$`}
                    </TitleText>
                </div>
            )}
            <div className="items-center">
                <TitleText size="xl" color="title" as="strong">
                    {`${format(price)}$`}
                </TitleText>
            </div>
            {oldPrice && (
                <div className="text-lg font-bold p-2 rounded-lg bg-purple-200 text-purple-500">
                    Giảm {format((price * 100) / oldPrice)}%
                </div>
            )}
        </div>
    )
}

export default Price
