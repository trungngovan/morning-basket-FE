import React, { useEffect, useState } from 'react'
import { TitleText, RegularText } from '../Typography'
import { defaultTheme } from '../../styles/themes/default'
import "../../styles/modal.css"

interface Props {
    message: string
    button_text: string
    onProceed: () => void
}

export function RedirectCountdown({ message, button_text, onProceed }: Props) {
    const [onHover, setOnHover] = useState(false)
    return (
        <div
            className="fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: 'rgba(0, 0, 0, .7)' }}
        >
            <div
                className="p-4 rounded-[6px_36px_6px_36px] flex flex-col items-center justify-between gap-4 z-50 max-h-[70%] w-fit"
                style={{
                    background: defaultTheme.colors['base-card'],
                    transform: 'translate(-50 %, -50 %) scale(1)',
                    transition: 'all 0.1s ease-in -out',
                    boxShadow: '0 0 8px rgba(241, 233, 201, 0.7)'
                }}
            >
                <div className="mt-[5%] flex flex-col">
                    <TitleText size='m' className="text-center">
                        <span className='text-purple-600 '>{message}</span>
                    </TitleText>
                </div>
                <div className="bottom-0 w-[85%] flex justify-center items-center flex-col">
                    <TitleText
                        size='s'
                        className="text-center"
                        style={{
                            color: defaultTheme.colors["brand-yellow-dark"]
                        }}
                    >
                        Đi đến
                    </TitleText>
                    <button
                        className="w-fit rounded-lg text-center text-base cursor-pointer font-bold p-2 md:text-lg"
                        style={{
                            color: onHover ? defaultTheme.colors["brand-yellow-dark"] : defaultTheme.colors["base-card"],
                            backgroundColor: onHover ? defaultTheme.colors["brand-yellow-light"] : defaultTheme.colors["brand-yellow"],
                            border: onHover ? "solid 1 px" : undefined
                        }}
                        onClick={onProceed}
                        onMouseEnter={() => { setOnHover(true) }}
                        onMouseLeave={() => { setOnHover(false) }}
                    >
                        {button_text}
                    </button>
                </div>
            </div >
        </div >
    )
}
