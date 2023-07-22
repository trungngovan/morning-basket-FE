import React from 'react'
import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { ProductCartCard } from '../ProductCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedProductsContainer } from './styles'
import { Button } from '../../../../components/Button'

export function SelectedProducts() {
    const { cartItems, cartQuantity } = useCart()

    return (
        <SelectedProductsContainer>
            <TitleText size="xs" color="subtitle">
                Selected products
            </TitleText>

            <DetailsContainer>
                {cartItems.map((item) => (
                    <ProductCartCard key={item.id} product={item} />
                ))}

                <ConfirmationSection />
            </DetailsContainer>
            <Button
                text="Confirm order"
                disabled={cartQuantity <= 0}
                type="submit"
            />
        </SelectedProductsContainer>
    )
}
