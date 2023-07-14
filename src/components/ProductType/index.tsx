export type Product = {
    // id: number;
    // name: string;
    // description: string;
    // price: number;
    // photo: string;
    // tags: string[];

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

export type GetProductsReponse = {
    products: Product[]
}
