import { CartItems } from "@/store/slices/cart";

export function getStoreCurrency() {
    return "₹"
}

export function getGiftBoxPrice() {
    return 30;
}

export function getCODFee() {
    return 49;
}

export function getDeliveryFee({ type }: {
    type: CartItems["shippingOption"],
}) {

    if (type === "standard") {
        return 80;
    } else if (type === "express") {
        return 149;
    } else {
        return 0;
    }

}

export function getIsEligibleForFreeDelivery(total: number) {
    return total > 999;
}