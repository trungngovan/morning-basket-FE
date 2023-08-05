import React, { useEffect, useState } from 'react'
import { TitleText, RegularText } from '../Typography'
import { defaultTheme } from '../../styles/themes/default'
import '../../styles/modal.css'

interface Props {
    countdowner: number
    onProceed: () => void
}

export function RedirectCountdown({ countdowner, onProceed }: Props) {
    const [_countdowner, setCountdowner] = useState(countdowner)
    const [onHover, setOnHover] = useState(false)

    useEffect(() => {
        if (_countdowner > 0) {
            setInterval(() => {
                setCountdowner(_countdowner - 1)
            }, 1000)
        } else {
            onProceed()
        }
    }, [_countdowner])
    return (
        <div
            className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: 'rgba(0, 0, 0, .7)' }}
        >
            <div
                className="p-4 rounded-[6px_36px_6px_36px] flex flex-col items-center justify-between text-center z-50 w-4/5 h-1/4 md:w-[20rem] 2xl:h-1/6"
                style={{
                    background: defaultTheme.colors['base-card'],
                    transform: 'translate(-50 %, -50 %) scale(1)',
                    transition: 'all 0.1s ease-in -out',
                    boxShadow: '0 0 8px rgba(241, 233, 201, 0.7)',
                }}
            >
                <div className="flex flex-col mt-[10%]">
                    <div className="flex flex-col">
                        <TitleText className="text-center">
                            Bạn sẽ được chuyển hướng trong{' '}
                            <span className="text-bold text-red-600">
                                {_countdowner}{' '}
                            </span>
                            giây nữa. Hoặc
                        </TitleText>
                    </div>
                </div>
                <div className="bottom-0 w-[85%] flex justify-center">
                    <button
                        className="rounded-lg text-center inline-block cursor-pointer font-bold p-2 "
                        style={{
                            color: onHover
                                ? defaultTheme.colors['brand-yellow-dark']
                                : defaultTheme.colors['base-card'],
                            backgroundColor: onHover
                                ? defaultTheme.colors['brand-yellow-light']
                                : defaultTheme.colors['brand-yellow'],
                            border: onHover ? 'solid 1 px' : undefined,
                        }}
                        onClick={onProceed}
                        onMouseEnter={() => {
                            setOnHover(true)
                        }}
                        onMouseLeave={() => {
                            setOnHover(false)
                        }}
                    >
                        Chuyển ngay
                    </button>
                </div>
            </div>
        </div>
    )
}
