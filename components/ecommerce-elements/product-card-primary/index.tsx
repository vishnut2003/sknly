import { getStoreCurrency } from '@/functions/eCommerce-store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addBundleGiftBox, addBundleProduct, removeBundleGiftBox, removeBundleProduct } from '@/store/slices/cart'
import { ProductCardInterface } from '@/types/product'
import Image from 'next/image'

const ProductsCardPrimary = ({
    product,
    bgColor,
    fgColor,
    type,
    giftProduct,
}: {
    product: ProductCardInterface,
    bgColor: string,
    fgColor: string,

    type: "single" | "bundle",
    giftProduct?: boolean,
}) => {

    const storeDispatch = useAppDispatch();
    const cartItem = useAppSelector(s => s.cart.items);

    const disable = useAppSelector(s => {
        if (s.cart.items.bundle?.size === s.cart.items.bundle?.items.length) {
            return true;
        } else if (giftProduct) {
            return true;
        } else {
            return false;
        }
    })

    const productAdded: "added" | "gift" | null =
        useAppSelector(s => {
            if (giftProduct) {
                return "gift";
            } else if (type === "bundle") {
                const exist = s.cart.items.bundle?.items.find(p => p.id === product.productId);
                if (exist) {
                    return "added";
                } else {
                    return null;
                }
            } else {
                const exist = s.cart.items.singleItems.find(p => p.id === product.productId);
                if (exist) {
                    return "added";
                } else {
                    return null;
                }
            }
        });

    return (
        <div
            className='w-full space-y-3'
            style={{
                opacity: disable && !productAdded ? 0.5 : 1,
            }}
        >
            <div
                className='space-y-4 p-3 rounded-xl'
                style={{
                    backgroundColor: bgColor,
                }}
            >
                <div
                    className='w-full rounded-xl aspect-square overflow-hidden'
                >
                    <Image
                        alt={product.productData.name}
                        src={product.featuredImage}
                        width={200}
                        height={300}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div
                    className='text-sm text-center font-semibold space-y-2'
                    style={{
                        color: fgColor,
                    }}
                >
                    <p>{product.productData.name}</p>
                    <p>
                        {product.productData.salePrice && (
                            <del
                                className='text-[#afa2a2]'
                            >{getStoreCurrency()}{product.productData.price}</del>
                        )}
                        &nbsp;
                        {getStoreCurrency()}{product.productData.salePrice || product.productData.price}
                    </p>
                </div>

                {
                    !productAdded && (
                        <button
                            className='w-full p-2 text-sm rounded-lg text-white cursor-pointer'
                            style={{
                                backgroundColor: fgColor,
                            }}
                            disabled={disable && !productAdded}
                            onClick={() => {
                                if (type === "bundle" && !giftProduct) {
                                    storeDispatch(
                                        addBundleProduct({
                                            id: product.productId,
                                            image: product.featuredImage,
                                            name: product.productData.name,
                                            price: {
                                                regular: product.productData.price,
                                                sale: product.productData.salePrice!,
                                            },
                                            qty: 1,
                                        })
                                    )
                                }
                            }}
                        >Add to Cart</button>
                    )
                }

                {
                    // Add to cart for gift product
                    giftProduct && (
                        <button
                            className='w-full p-2 text-sm rounded-lg text-white cursor-pointer'
                            style={{
                                backgroundColor: fgColor,
                            }}
                            disabled={disable && !productAdded}
                            onClick={() => {
                                if (!cartItem.bundle?.giftBox) {
                                    storeDispatch(
                                        addBundleGiftBox({
                                            image: product.featuredImage,
                                        })
                                    )
                                } else {
                                    storeDispatch(
                                        removeBundleGiftBox()
                                    )
                                }
                            }}
                        >
                            {
                                cartItem.bundle?.giftBox ?
                                    "Remove" : "Add to Cart"
                            }
                        </button>
                    )
                }

                {
                    productAdded === "added" && (
                        <button
                            className='w-full p-2 text-sm rounded-lg text-white cursor-pointer'
                            style={{
                                backgroundColor: fgColor,
                            }}
                            disabled={disable && !productAdded}
                            onClick={() => {
                                storeDispatch(
                                    removeBundleProduct({
                                        id: product.productId,
                                    })
                                )
                            }}
                        >Remove</button>
                    )
                }

            </div>

            <div
                className='flex justify-center'
            >
                <button
                    className='cursor-pointer font-semibold underline text-[#451F0F]'
                >View Details</button>
            </div>
        </div>
    )
}

export default ProductsCardPrimary