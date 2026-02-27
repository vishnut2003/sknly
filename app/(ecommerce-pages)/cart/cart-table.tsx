'use client';

import { getGiftBoxPrice, getStoreCurrency } from '@/functions/eCommerce-store';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addBundleGiftBox, removeBundle, removeBundleGiftBox, removeSingleItem, setSingleItemQty, SingleProductCartItem } from '@/store/slices/cart';
import { RiAddLine, RiCheckLine, RiDeleteBin5Line, RiSubtractLine } from '@remixicon/react';
import Image from 'next/image';
import { useEffect } from 'react';
import GiftBoxImage from "./assets/gift-product-image.png";
import Link from 'next/link';

const CartProductTable = () => {

    const cartItems = useAppSelector(s => s.cart.items);
    const storeDispatch = useAppDispatch();

    useEffect(() => {
        if (cartItems.bundle?.size !== cartItems.bundle?.items.length) {
            storeDispatch(
                removeBundle()
            )
        }
    }, [])

    return (
        <div>
            <table
                className='text-left'
            >
                <thead>
                    <tr
                        className='bg-[#FDEBEB]'
                    >
                        {
                            [
                                "Products",
                                "Qty",
                                "Sub Total",
                            ].map((text, idx) => (
                                <th
                                    key={idx}
                                    className={
                                        `font-semibold whitespace-nowrap py-3 px-4 ${text === "Products" ? "w-full" : " min-w-50"}`
                                        + ` ${text === "Qty" && "text-center"}`
                                        + ` ${text === "Sub Total" && "text-right"}`
                                    }
                                >{text}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>

                    {cartItems.bundle && (
                        cartItems.bundle.items.length > 0 && (
                            <tr>
                                <td
                                    className='flex items-center gap-7 py-5'
                                >
                                    <button
                                        className='shrink-0 cursor-pointer'
                                        onClick={() => {
                                            storeDispatch(
                                                removeBundle()
                                            )
                                        }}
                                    >
                                        <RiDeleteBin5Line
                                            size={25}
                                        />
                                    </button>

                                    <p
                                        className='italic text-lg font-bold'
                                    >Bundle of {cartItems.bundle.size}</p>

                                    <button
                                        className='cursor-pointer flex items-center gap-2'
                                        onClick={() => {
                                            if (cartItems.bundle?.giftBox) {
                                                storeDispatch(
                                                    removeBundleGiftBox()
                                                )
                                            } else {
                                                storeDispatch(
                                                    addBundleGiftBox({
                                                        image: GiftBoxImage.src,
                                                    })
                                                )
                                            }
                                        }}
                                    >
                                        <p
                                            className='font-semibold'
                                        >Make it a Gift +{getStoreCurrency()}{getGiftBoxPrice()}</p>
                                        <div
                                            className='w-5 h-5 border-2'
                                        >
                                            {cartItems.bundle.giftBox && (
                                                <RiCheckLine
                                                    size={15}
                                                    className='font-semibold'
                                                />
                                            )}
                                        </div>
                                    </button>

                                </td>
                            </tr>
                        )
                    )}

                    {cartItems.bundle?.items.map((product, index, products) => (
                        <SingleProductRow
                            key={index}
                            product={{
                                ...product,
                                price: product.price.sale,
                            }}
                            isBundle
                            addBorder={(products.length - 1) === index && !cartItems.bundle?.giftBox}
                        />
                    ))}

                    {cartItems.bundle?.giftBox && (
                        <SingleProductRow
                            product={{
                                id: "gift-box",
                                image: cartItems.bundle.giftBox.image,
                                name: "Gift Box",
                                price: getGiftBoxPrice(),
                                qty: 1,
                            }}
                            addBorder
                            isBundle
                            isGift
                        />
                    )}

                    {cartItems.singleItems.map((product, index) => (
                        <SingleProductRow
                            product={product}
                            key={index}
                            addBorder
                        />
                    ))}

                </tbody>
            </table>
        </div>
    )
}

function SingleProductRow({ product, addBorder, isBundle, isGift }: {
    product: SingleProductCartItem,
    addBorder?: boolean,
    isBundle?: boolean,
    isGift?: boolean,
}) {

    const storeDispatch = useAppDispatch();

    return (
        <tr
            className={`${addBorder ? "border-b border-[#BA131C60]" : ""}`}
        >
            {
                [
                    (
                        <div
                            className={
                                'flex items-center gap-5'
                                + ` ${isBundle ? "pl-11" : ""}`
                            }
                        >
                            {
                                !isBundle && (
                                    <button
                                        className='shrink-0 cursor-pointer'
                                        onClick={() => {
                                            storeDispatch(
                                                removeSingleItem({ id: product.id })
                                            )
                                        }}
                                    >
                                        <RiDeleteBin5Line
                                            size={25}
                                        />
                                    </button>
                                )
                            }
                            <div
                                className=' flex items-center gap-4'
                            >
                                <div
                                    className='w-30 aspect-square'
                                >
                                    <Image
                                        alt={product.name}
                                        src={product.image}
                                        width={100}
                                        height={100}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div
                                    className='space-y-3'
                                >
                                    <p
                                        className='text-lg font-semibold'
                                    >{product.name}</p>

                                    {isBundle && !isGift ? (
                                        <Link
                                            href={"/bundles"}
                                            className='underline'
                                        >Change</Link>
                                    ): ""}

                                </div>
                            </div>
                        </div>
                    ),
                    (
                        <div>
                            <div
                                className={'flex items-center justify-between border-2 gap-3 max-w-34 mx-auto' + ` ${isBundle ? "opacity-30" : ""}`}
                            >
                                {
                                    [
                                        {
                                            icon: RiSubtractLine,
                                            onClick: () => {
                                                storeDispatch(
                                                    setSingleItemQty({
                                                        id: product.id,
                                                        qty: product.qty - 1,
                                                    })
                                                )
                                            },
                                        },
                                        {
                                            icon: RiAddLine,
                                            onClick: () => {
                                                storeDispatch(
                                                    setSingleItemQty({
                                                        id: product.id,
                                                        qty: product.qty + 1,
                                                    })
                                                )
                                            },
                                        },
                                    ].map((action, idx) => (
                                        <button
                                            key={idx}
                                            className={
                                                `${idx === 0 ? "order-1" : "order-3"}`
                                                + ' py-3 px-3 cursor-pointer disabled:cursor-default'
                                            }
                                            onClick={action.onClick}
                                            disabled={isBundle}
                                        >
                                            <action.icon
                                                size={20}
                                            />
                                        </button>
                                    ))
                                }
                                <p
                                    className='order-2 font-bold text-lg'
                                >{product.qty}</p>
                            </div>
                        </div>
                    ),
                    (
                        <>
                            <p
                                className='text-right font-bold'
                            >
                                {getStoreCurrency()}
                                &nbsp;{product.price * product.qty}
                            </p>
                        </>
                    )
                ].map((col, idx) => (
                    <td
                        key={idx}
                        className='py-6 px-4'
                    >
                        {col}
                    </td>
                ))
            }
        </tr>
    )
}

export default CartProductTable