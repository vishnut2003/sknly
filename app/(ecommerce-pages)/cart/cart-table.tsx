'use client';

import { getGiftBoxPrice, getStoreCurrency } from '@/functions/eCommerce-store';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addBundleGiftBox, removeBundle, removeBundleGiftBox, removeSingleItem, setSingleItemQty, SingleProductCartItem } from '@/store/slices/cart';
import { RiAddLine, RiCheckLine, RiDeleteBin5Line, RiSubtractLine } from '@remixicon/react';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
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
    }, [cartItems, storeDispatch])

    return (
        <div>
            <table
                className='text-left hidden md:table'
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

            <div
                className='md:hidden space-y-4'
            >
                {/* Bundles items */}
                {cartItems.bundle && (
                    <div
                        className='space-y-5'
                    >
                        <div
                            className='flex items-center justify-between'
                        >
                            <button
                                onClick={() => {
                                    storeDispatch(
                                        removeBundle()
                                    )
                                }}
                            >
                                <RiDeleteBin5Line />
                            </button>
                            <p
                                className='font-semibold'
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
                        </div>

                        <div
                            className='space-y-4 border-b pb-4'
                        >
                            {cartItems.bundle.items.map((product, index) => (
                                <div
                                    key={index}
                                >
                                    <SingleProductRowMobile
                                        product={{
                                            ...product,
                                            price: product.price.sale || product.price.regular,
                                        }}
                                        isBundle
                                    />
                                </div>
                            ))}

                            {cartItems.bundle?.giftBox && (
                                <SingleProductRowMobile
                                    product={{
                                        id: "gift-box",
                                        image: cartItems.bundle.giftBox.image,
                                        name: "Gift Box",
                                        price: getGiftBoxPrice(),
                                        qty: 1,
                                    }}
                                    isBundle
                                />
                            )}

                        </div>
                    </div>
                )}

                {cartItems.singleItems.map((product, index) => (
                    <Fragment
                        key={index}
                    >
                        {index !== 0 && (
                            <hr />
                        )}
                        <SingleProductRowMobile
                            product={product}
                        />
                    </Fragment>
                ))}

            </div>

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
                            key={"table-col-1"}
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
                                    ) : ""}

                                </div>
                            </div>
                        </div>
                    ),
                    (
                        <div
                            key={"table-col-2"}
                        >
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
                        <Fragment
                            key={"table-col-3"}
                        >
                            <p
                                className='text-right font-bold'
                            >
                                {getStoreCurrency()}
                                &nbsp;{product.price * product.qty}
                            </p>
                        </Fragment>
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

function SingleProductRowMobile({
    product,
    isBundle,
}: {
    product: SingleProductCartItem,
    isBundle?: boolean,
}) {

    const currency = getStoreCurrency();
    const storeDispatch = useAppDispatch();

    return (
        <div
            className='flex gap-5 items-stretch'
        >
            <div
                className='w-20 aspect-square shrink-0'
            >
                <Image
                    alt={product.name}
                    src={product.image}
                    width={500}
                    height={500}
                    className='w-full h-full object-cover object-center rounded-xl'
                />
            </div>

            <div
                className='w-full flex flex-col justify-between gap-3'
            >
                <div
                    className='flex items-center justify-between'
                >
                    <div>
                        <p
                            className='font-semibold'
                        >{product.name}</p>
                        <p
                            className='text-xs'
                        >Whipped Bodywash</p>
                    </div>
                    <div>
                        {!isBundle && (
                            <button
                                onClick={() => {
                                    storeDispatch(
                                        removeSingleItem({ id: product.id })
                                    )
                                }}
                            >
                                <RiDeleteBin5Line />
                            </button>
                        )}
                    </div>
                </div>
                <div
                    className='w-full flex items-end justify-between'
                >
                    <p
                        className='font-semibold'
                    >{currency}{product.price}</p>
                    <div
                        className='flex items-center border-2 rounded-lg py-1 px-3 gap-3'
                        style={{ opacity: isBundle ? 0.3 : 1 }}
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
                                            }),
                                        )
                                    },
                                },
                                product.qty,
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
                                }
                            ].map((item, index) => {

                                if (typeof item === "number") {
                                    return <p
                                        key={index}
                                        className='text-lg'
                                    >{item}</p>
                                } else {
                                    return (
                                        <button
                                            key={index}
                                            className='shrink-0'
                                            onClick={item.onClick}
                                            disabled={isBundle}
                                        >
                                            <item.icon
                                                size={20}
                                            />
                                        </button>
                                    )
                                }

                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartProductTable