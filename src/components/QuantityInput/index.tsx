import React from 'react'
import { IconWrapper, QuantityInputContainer } from './styles'
import { PiMinus, PiPlus } from 'react-icons/pi'

interface QuantityInputProps {
    size?: 'medium' | 'small'
    onIncrease: () => void
    onDecrease: () => void
    quantity: number
    maxQuantity: number
}

export function QuantityInput({
    size = 'medium',
    onIncrease,
    onDecrease,
    quantity,
    maxQuantity
}: QuantityInputProps) {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <PiMinus size={14} />
            </IconWrapper>
            <input type="number" readOnly value={quantity} />
            <IconWrapper disabled={quantity >= maxQuantity} onClick={onIncrease}>
                <PiPlus size={14} />
            </IconWrapper>
        </QuantityInputContainer>
    )
}
