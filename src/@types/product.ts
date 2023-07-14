export type ProductType = {
    id: number
    barcode: string
    name: string
    description: string
    price: number
    quantity: number
    photo: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
}

export type GetAllProductsResponse = {
    products: ProductType[]
}

export type GetProductByIdResponse = {
    product: ProductType
}
