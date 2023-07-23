import React from 'react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Product } from '../components/ProductType'
import { produce } from 'immer'
import { apiPost } from '../apis/api'
import { AxiosResponse } from 'axios'

export interface CartItem extends Product {
    id?: number
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[]
    cartQuantity: number
    cartItemsTotal: number
    addProductToCart: (product: CartItem) => void
    changeCartItemQuantity: (
        cartItemId: number,
        type: 'increase' | 'decrease'
    ) => void
    removeCartItem: (cartItemId: number) => void
    cleanCart: () => void
    sendOrder: (data: any) => any
    isOrderReceived: boolean
    orderData: any
}

interface CartContextProviderProps {
    children: ReactNode
}

const PRODUCT_ITEMS_STORAGE_KEY = 'MorningBasket:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(PRODUCT_ITEMS_STORAGE_KEY)

        if (storedCartItems) {
            return JSON.parse(storedCartItems)
        }

        return []
    })
    const [isOrderReceived, setIsOrderReceived] = useState(false)
    const [orderData, setOrderData] = useState(false)

    const cartQuantity = cartItems.length
    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addProductToCart(product: CartItem) {
        const productAlreadyExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === product.id
        )

        const newCart = produce(cartItems, (draft) => {
            if (productAlreadyExistsInCart < 0) {
                draft.push(product)
            } else {
                draft[productAlreadyExistsInCart].quantity += product.quantity
            }
        })

        setCartItems(newCart)
    }

    function changeCartItemQuantity(
        cartItemId: number,
        type: 'increase' | 'decrease'
    ) {
        const newCart = produce(cartItems, (draft) => {
            const productExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            )

            if (productExistsInCart >= 0) {
                const item = draft[productExistsInCart]
                item.quantity =
                    type === 'increase' ? item.quantity + 1 : item.quantity - 1
            }
        })

        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, (draft) => {
            const productExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            )

            if (productExistsInCart >= 0) {
                draft.splice(productExistsInCart, 1)
            }
        })

        setCartItems(newCart)
    }

    function cleanCart() {
        setCartItems([])
    }

    const sendOrder = async (
        data: any
    ): Promise<boolean> => {
        try {
            setTimeout(async () => {
                const customerId = JSON.parse(localStorage.getItem("MorningBasket:customerInfo") as string).id
                const items = cartItems.map((item) => {
                    let retItem = (({ id, name, quantity, price }) => ({ id, name, quantity, price }))(item)
                    retItem = Object.assign(retItem, { itemId: retItem.id })
                    retItem.price = retItem.price ? retItem.price : 0
                    delete retItem.id
                    return retItem
                })
                const shippingAddress = [data.number_street, data.ward, data.district, data.province].join(", ")
                const response = await apiPost<unknown, AxiosResponse>(
                    `/orders`,
                    {
                        customerId: customerId,
                        items: items,
                        totalPrice: cartItemsTotal,
                        shippingAddress: shippingAddress,
                        billingAddress: null,
                        addressNote: data.note ? data.note : null,
                        paymentMethod: data.paymentMethod
                    }
                )
                if (response && response.status === 200) {
                    setOrderData(response.data.order)
                    setIsOrderReceived(true)
                    return true
                }
            })
        } catch (error) {
            console.error(error)
        }
        return false
    }


    useEffect(() => {
        localStorage.setItem(
            PRODUCT_ITEMS_STORAGE_KEY,
            JSON.stringify(cartItems)
        )
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addProductToCart,
                cartQuantity,
                cartItemsTotal,
                changeCartItemQuantity,
                removeCartItem,
                cleanCart,
                sendOrder,
                isOrderReceived,
                orderData
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
