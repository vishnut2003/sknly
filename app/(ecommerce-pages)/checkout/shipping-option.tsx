'use client';

import RadioElement from "@/components/ui-elements/radio-element";
import { getDeliveryFee, getStoreCurrency } from "@/functions/eCommerce-store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CartItems, changeShippingOption } from "@/store/slices/cart";

const ShippingOptionSection = () => {

    const shippingType = useAppSelector(s => s.cart.items.shippingOption);
    const storeDispatch = useAppDispatch();
    const currency = getStoreCurrency();

    const radioOptions: {
        name: CartItems["shippingOption"],
        label: string,
        price: number,
        value: boolean,
    }[] = [
            {
                name: "standard",
                label: "Standard Delivery (3-7 business days)",
                price: getDeliveryFee({ type: "standard" }),
                value: shippingType === "standard",
            },
            // {
            //     name: "express",
            //     label: "Express Delivery (1-3 business days)",
            //     price: 149,
            //     value: shippingType === "express",
            // },
        ]

    return (
        <div
            className="space-y-4"
        >
            <p
                className="text-sm font-semibold italic"
            >Fast, safe delivery across India.</p>

            <div>
                {radioOptions.map((option, index) => (
                    <RadioElement
                        key={index}
                        isChecked={option.value}
                        onChange={(_, name) => {
                            if (option.name !== shippingType) {
                                console.log("Button")
                                storeDispatch(
                                    changeShippingOption(name as CartItems["shippingOption"])
                                )
                            }
                        }}
                        name={option.name}
                    >
                        <div
                            className="flex items-center justify-between text-sm"
                        >
                            <div>{option.label}</div>
                            <div>
                                +{currency + option.price}
                            </div>
                        </div>
                    </RadioElement>
                ))}
            </div>

            <p
                className="text-sm"
            >Free shipping is applicable only on standard delivery on your first order with Sknly Club.</p>
        </div>
    )
}

export default ShippingOptionSection