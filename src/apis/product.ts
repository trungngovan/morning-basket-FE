import { GetProductByIdResponse } from '../@types/product'
import { apiGet } from '../apis/api'

type Props = {
    id: number
}

export const getProductDetail = async ({ id }: Props) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            apiGet<GetProductByIdResponse>(
                `http://localhost:3000/products/${id}`
            ).then((response) => {
                resolve(response.data.product)
            })
        }, 200)
    })
}
