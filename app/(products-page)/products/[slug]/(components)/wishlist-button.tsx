'use client';

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addProduct, removeProduct } from "@/store/slices/wishlist";
import { RiHeartFill, RiHeartLine } from "@remixicon/react";
import { CSSProperties } from "react";

const WishlistButton = ({
    productId,
    className,
    style,
}: {
    productId: string,
    style?: CSSProperties,
    className?: string,
}) => {

    const exist = useAppSelector(s => s.wishlist.items.find(p => p.productId === productId));
    const storeDispatch = useAppDispatch();

    return (
        <button
            className={`cursor-pointer ${className}`}
            style={{
                ...style,
            }}
            onClick={() => {
                if (exist) {
                    storeDispatch(
                        removeProduct({ productId })
                    );
                } else {
                    storeDispatch(
                        addProduct({ productId })
                    )
                }
            }}
        >
            {exist ? (
                <RiHeartFill
                    size={20}
                />
            ) : (
                <RiHeartLine
                    size={20}
                />
            )}
        </button>
    )
}

export default WishlistButton