export type Product = {
    id?: number
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
    products: Product[]
}

export type GetProductByIdResponse = {
    product: Product
}
