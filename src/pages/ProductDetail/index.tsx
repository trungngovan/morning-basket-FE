import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../apis/product'
import { ProductBooking } from './components/ProductBooking'
import { ProductInfomation } from './components/ProductInfomation'
import { Review } from './components/Review'
import { Product } from '../../@types/product'

const ProductDetail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        if (!id) {
            setLoading(false)
            return
        }
        getProductDetail({ id: +id })
            .then((res) => {
                setProduct(res as Product)
            })
            .catch(() => null)
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="px-20 py-10">
            <ProductBooking product={product as Product} />
            {product && <ProductInfomation product={product as Product} />}
            <Review />
        </div>
    )
}

export default ProductDetail
