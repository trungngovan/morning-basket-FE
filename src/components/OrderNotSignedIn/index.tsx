import React, { useState } from 'react'
import { TitleText, RegularText } from '../Typography'
import {
    OrderNotSignedInContainer,
} from './styles'

interface Props {
    onClose: () => void
    onProceed: () => void
}
interface CloseButtonProps {
    isShow: boolean
    onClick: () => void
}

const CloseButton = ({ isShow, onClick }: CloseButtonProps) => {
    return (
        <div
            className="absolute top-0 right-0 p-2 cursor-pointer ease-in-out duration-300"
            onClick={() => onClick()}
        >
            {isShow ? (
                <button
                    type="button"
                    className="opacity-50 bg-red-500 rounded-full p-2 inline-flex items-center justify-center"
                >
                    <span className="sr-only">Close menu</span>
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            ) : null}
        </div>
    )
}

export function OrderNotSignedIn({ onClose, onProceed }: Props) {
    const [showCloseButton, setShowCloseButton] = useState(false)
    return (
        // TODO
        <OrderNotSignedInContainer
            className="modal bg-opacity-50"
            onMouseEnter={() => setShowCloseButton(true)}
            onMouseLeave={() => setShowCloseButton(false)}
        >
            <CloseButton
                onClick={onClose}
                isShow={showCloseButton}
            ></CloseButton>
            <div className="flex flex-col my-[10%]">
                <div className="flex flex-col">
                    <TitleText className="text-center justify-center">
                        Bạn chưa đăng nhập
                    </TitleText>
                    <RegularText className="text-center justify-center">
                        Hãy đăng nhập để đặt hàng
                    </RegularText>
                </div>
            </div>
            <div className="b-0 mb-2 w-[75%] h-[30%] flex flex-col justify-between md:flex-row md:gap-2">
                <button className="m-auto click deny" onClick={onClose}>
                    Chưa phải lúc này
                </button>
                <button className="m-auto click accept" onClick={onProceed}>
                    Đăng nhập
                </button>
            </div>
        </OrderNotSignedInContainer>
    )
}
