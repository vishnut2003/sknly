"use client";

import { SknlyRewardsValidateApiRequestData, SknlyRewardsValidateApiResponseData } from "@/app/api/ecommerce/sknly-rewards/validate/route";
import { getCODFee, getDeliveryFee, getGiftBoxPrice } from "@/functions/eCommerce-store";
import { IOrderSknlyRewards } from "@/models/order";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addSknlyReward, removeSknlyRewards } from "@/store/slices/cart";
import axios from "axios";
import { useEffect, useState } from "react";

export interface PurchaseSummaryInterface {
    productCount: number,
    orderValue: number,
    save: number,
    deliveryFee: number,
    codFee: number,
    sknlyReward: null | IOrderSknlyRewards,
    discount: number,
    total: number,
}

export function usePurchaseSummary() {

    const cartItems = useAppSelector(s => s.cart.items)
    const storeDispatch = useAppDispatch();

    const DELIVERY_FEE = getDeliveryFee({ type: cartItems.shippingOption });
    const COD_FEE = getCODFee();

    const [output, setOutput] = useState<PurchaseSummaryInterface>({
        deliveryFee: DELIVERY_FEE,
        sknlyReward: null,
        orderValue: 0,
        productCount: 0,
        save: 0,
        codFee: 0,
        total: 0,
        discount: 0,
    });


    useEffect(() => {
        (async () => {
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

            const codFee = cartItems.codFee ? COD_FEE : 0;

            const DELIVERY_FEE = getDeliveryFee({
                type: cartItems.shippingOption,
            })

            let total = (subTotal + DELIVERY_FEE + codFee) - (cartItems.discount || 0);

            if (cartItems.bundle?.giftBox) {
                total += getGiftBoxPrice();
            }

            const requestData: SknlyRewardsValidateApiRequestData = {
                deliveryType: cartItems.shippingOption,
            }

            const {
                data: sknlyReward,
            } = await axios.post<SknlyRewardsValidateApiResponseData | null>(
                "/api/ecommerce/sknly-rewards/validate",
                requestData,
            );

            if (sknlyReward) {
                storeDispatch(
                    addSknlyReward(sknlyReward.description),
                )
            } else {
                storeDispatch(
                    removeSknlyRewards(),
                )
            }

            let discountAmount = 0;

            if (sknlyReward?.type === "discount") {
                if (sknlyReward.discount?.flat) {
                    discountAmount = sknlyReward.discount.flat;
                } else if (sknlyReward.discount?.percent) {
                    const amount = (sknlyReward.discount.percent / 100) * total;
                    discountAmount = amount;
                } else {
                    throw new Error("Discount is not valid.")
                }
            }

            total -= discountAmount;

            const output: PurchaseSummaryInterface = {
                deliveryFee: DELIVERY_FEE,
                orderValue: subTotal,
                productCount,
                save: savedAmount,
                codFee,
                total,
                sknlyReward: sknlyReward ? sknlyReward.description : null,
                discount: discountAmount,
            }

            setOutput(output);
        })();
    }, [cartItems, COD_FEE, storeDispatch])

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