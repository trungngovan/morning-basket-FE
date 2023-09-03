import { useContext } from 'react'
import { CartItem, CartContext } from '../contexts/CartContext'

export function useCart() {
    return useContext(CartContext)
}

export interface CartItemType extends CartItem { }