import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../apis/product'
import { ProductBooking } from './components/ProductBooking'
import { ProductInfomation } from './components/ProductInfomation'
import { Review } from './components/Review'
import { ProductType } from '../../@types/product'
import React from 'react'

export function ProductDetail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        if (!id) {
            setLoading(false)
            return
        }
        getProductDetail({ id: +id })
            .then((res) => {
                setProduct(res as ProductType)
            })
            .catch(() => null)
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container">
            <ProductBooking product={product as ProductType} />
            {product && <ProductInfomation product={product as ProductType} />}
            <Review />
        </div>
    )
}
