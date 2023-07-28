import React, { useEffect, useState } from 'react'
import { TitleText, RegularText } from '../Typography'
import { RedirectCountdownContainer } from './styles'
import { Title } from '../../pages/AboutUs/styles'

interface Props {
    seconds: number
    onProceed: () => void
}

export function RedirectCountdown({ seconds, onProceed }: Props) {
    const [countdowner, setCountdowner] = useState(seconds)
    useEffect(() => {
        if (countdowner > 0) {
            setInterval(
                (() => { setCountdowner(countdowner - 1) }),
                1000
            )
        }
    }, [countdowner])
    return (
        <RedirectCountdownContainer className="modal bg-opacity-50" >
            <div className="flex flex-col mt-[10%]">
                <div className="flex flex-col">
                    <Title className="text-center justify-center title">
                        Bạn sẽ được chuyển hướng trong <span className='text-bold text-red-600'>{countdowner} </span>giây nữa. Hoặc
                    </Title>
                </div>
            </div>
            <div className="click-container">
                <button className="m-auto click proceed" onClick={onProceed}>
                    Chuyển ngay
                </button>
            </div>
        </RedirectCountdownContainer>
    )
}
