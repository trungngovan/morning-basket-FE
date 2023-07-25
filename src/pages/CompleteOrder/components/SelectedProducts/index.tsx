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
                Sản phẩm trong giỏ hàng
            </TitleText>

            <DetailsContainer>
                <div
                    className="flex flex-col overflow-y-hidden hover:overflow-y-scroll mb-4"
                    style={{ scrollbarGutter: 'stable' }}
                >
                    {cartItems.map((item) => (
                        <ProductCartCard key={item.id} product={item} />
                    ))}
                </div>
                <ConfirmationSection />
            </DetailsContainer>
        </SelectedProductsContainer>
    )
}
