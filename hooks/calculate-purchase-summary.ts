"use client";

import { getGiftBoxPrice } from "@/functions/eCommerce-store";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

export interface PurchaseSummaryInterface {
    productCount: number,
    orderValue: number,
    save: number,
    deliveryFee: number,
    total: number,
}

export function usePurchaseSummary() {

    const DELIVERY_FEE = 49;

    const [output, setOutput] = useState<PurchaseSummaryInterface>({
        deliveryFee: DELIVERY_FEE,
        orderValue: 0,
        productCount: 0,
        save: 0,
        total: 0,
    });

    const cartItems = useAppSelector(s => s.cart.items)

    useEffect(() => {
        let productCount = cartItems.singleItems.length;
        if (cartItems.bundle) productCount++;

        let savedAmount: number = 0;

        if (cartItems.bundle) {
            savedAmount = calculateBundleSavedAmount(
                cartItems.bundle.items.map(p => ({
                    regularPrice: p.price.regular,
                    qty: p.qty,
                    salePrice: p.price.sale,
                }))
            )
        }

        let products = cartItems.singleItems.map(p => ({ price: p.price, qty: p.qty }))

        if (cartItems.bundle) {
            products = [
                ...products,
                ...cartItems.bundle.items.map(p => ({
                    price: p.price.sale,
                    qty: p.qty,
                }))
            ]
        }

        const subTotal = calculateTotalProductValue(products);

        let total = subTotal + DELIVERY_FEE;

        if (cartItems.bundle?.giftBox) {
            total += getGiftBoxPrice();
        }

        const output: PurchaseSummaryInterface = {
            deliveryFee: DELIVERY_FEE,
            orderValue: subTotal,
            productCount,
            save: savedAmount,
            total,
        }

        setOutput(output);

    }, [cartItems])

    return output;
}

export function calculateBundleSavedAmount(products: {
    regularPrice: number,
    salePrice: number,
    qty: number,
}[]) {
    let regularPriceTotal: number = 0;
    let salePriceTotal: number = 0;

    for (const p of products) {
        regularPriceTotal += p.qty * p.regularPrice;
        salePriceTotal += p.qty * p.salePrice;
    }

    const savedAmout = regularPriceTotal - salePriceTotal;
    return savedAmout;
}

export function calculateTotalProductValue(products: {
    price: number,
    qty: number,
}[]) {
    let result: number = 0;

    for (const p of products) {
        const subTotal = p.qty * p.price;
        result += subTotal;
    }

    return result;
}