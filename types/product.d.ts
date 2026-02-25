export interface ProductCardInterface {
    productId: string,
    productData: {
        name: string,
        category: string,
        price: number,
        salePrice?: number,
    },
    featuredImage: string,
}