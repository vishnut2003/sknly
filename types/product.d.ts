export interface ProductCardInterface {
    productid: string,
    productData: {
        name: string,
        category: string,
        price: number,
        salePrice?: number,
    },
    featuredImage: string,
}