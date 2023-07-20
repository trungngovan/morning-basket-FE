import React from 'react'
import { ProductType } from '../../../../@types/product'
import Content from './Content'

type Props = {
    product: ProductType
}

const ProductInfomation = ({ product }: Props) => {
    return (
        <div className="mt-10 bg-white shadow rounded-2xl p-10">
            <div className="bg-purple-100 text-purple-500 text-xl font-bold capitalize p-4 rounded-2xl">
                Chi tiết sản phẩm
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <Content label="Chất liệu" content="Cà phê" />
                <Content label="Xuất xứ" content="Việt Nam" />
                <Content label="Thương hiệu" content="Trung nguyên" />
            </div>
            <Content
                className="flex-col items-start gap-2 mt-3"
                label="Mô tả sản phẩm"
                content={product.description}
            />
        </div>
    )
}

export default ProductInfomation
