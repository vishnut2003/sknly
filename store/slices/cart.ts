import { IOrderSknlyRewards } from "@/models/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SingleProductCartItem = {
    id: string,
    name: string,
    price: number,
    image: string,
    qty: number,
}

export interface BundleProductCartItem extends Omit<SingleProductCartItem, "price"> {
    price: {
        regular: number,
        sale: number,
    },
}

export type CartItems = {
    bundle?: {
        items: BundleProductCartItem[],
        size: number,
        giftBox: null | {
            image: string,
            message: string,
        },
    },
    singleItems: SingleProductCartItem[],
    discount?: number,
    shippingOption?: "standard" | "express",
    codFee?: boolean,
    sknlyReward?: IOrderSknlyRewards,
}

type CartState = {
    items: CartItems,
}

const initialState: CartState = {
    items: {
        singleItems: [],
    },
}

const DEFAULT_BUNDLE_SIZE = 2;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        // Single Items Manipulate Functions
        addSingleItem: (
            state,
            action: PayloadAction<Omit<SingleProductCartItem, "qty"> & { qty?: number }>
        ) => {
            const productExist =
                state.items.singleItems.find(p => p.id === action.payload.id);
            if (productExist) {
                productExist.qty += (action.payload.qty || 1);
            } else {
                state.items.singleItems.push({
                    ...action.payload,
                    qty: action.payload.qty || 1,
                })
            }
        },

        removeSingleItem: (
            state,
            action: PayloadAction<{ id: string }>,
        ) => {
            state.items.singleItems = state.items.singleItems.filter(p => p.id !== action.payload.id);
        },

        setSingleItemQty: (
            state,
            action: PayloadAction<{
                id: string,
                qty: number,
            }>
        ) => {
            state.items.singleItems = state.items.singleItems.map(p => {
                if (p.id === action.payload.id) {
                    return ({
                        ...p,
                        qty: action.payload.qty === 0 ? 1 : action.payload.qty,
                    });
                } else {
                    return p;
                }
            })
        },

        // Bundle Manipulate Functions
        updateBundleSize: (
            state,
            action: PayloadAction<{
                size: number,
            }>
        ) => {
            if (!state.items.bundle) {
                state.items.bundle = {
                    giftBox: null,
                    size: action.payload.size,
                    items: [],
                }
            } else {
                state.items.bundle = {
                    ...state.items.bundle,
                    size: action.payload.size,
                    items: [],
                }
            }
        },

        addBundleProduct: (
            state,
            action: PayloadAction<BundleProductCartItem>,
        ) => {
            if (!state.items.bundle) {
                state.items.bundle = {
                    giftBox: null,
                    items: [
                        action.payload,
                    ],
                    size: DEFAULT_BUNDLE_SIZE,
                }
            } else {

                if (state.items.bundle.items.length === state.items.bundle.size) {
                    return;
                }

                state.items.bundle = {
                    ...state.items.bundle,
                    items: [
                        ...state.items.bundle.items,
                        action.payload,
                    ],
                }
            }
        },

        removeBundleProduct: (
            state,
            action: PayloadAction<{
                id: string,
            }>,
        ) => {
            if (!state.items.bundle) {
                return;
            }

            state.items.bundle.items =
                state.items.bundle.items.filter(p => p.id !== action.payload.id);
        },

        removeBundle: (state) => {
            state.items.bundle = undefined;
        },

        addBundleGiftBox: (
            state,
            action: PayloadAction<{
                image: string,
            }>,
        ) => {

            if (!state.items.bundle) {
                state.items.bundle = {
                    giftBox: {
                        image: action.payload.image,
                        message: "",
                    },
                    items: [],
                    size: DEFAULT_BUNDLE_SIZE,
                };
            } else {
                state.items.bundle.giftBox = {
                    image: action.payload.image,
                    message: "",
                };
            }

        },

        removeBundleGiftBox: (
            state,
        ) => {
            if (!state.items.bundle) {
                return;
            }

            state.items.bundle.giftBox = null;
        },

        updateBundleGiftBoxMessage: (
            state,
            action: PayloadAction<{ value: string }>,
        ) => {
            if (!state.items.bundle?.giftBox) {
                return;
            }

            state.items.bundle.giftBox.message = action.payload.value;

        },

        // ShippingOption Fx
        changeShippingOption: (
            state,
            action: PayloadAction<CartItems["shippingOption"]>,
        ) => {

            if (!action.payload) {
                return;
            }

            state.items.shippingOption = action.payload;
        },

        // PaymentOption Fx
        changeCodStatus: (
            state,
            action: PayloadAction<{
                value: boolean,
            }>,
        ) => {
            state.items.codFee = action.payload.value;
        },

        // reset cart
        resetCart: (state) => {
            state.items = {
                singleItems: [],
            }
        },

        // Sknly Reward
        addSknlyReward: (
            state,
            action: PayloadAction<IOrderSknlyRewards>,
        ) => {

            if (!action.payload) {
                return;
            }

            state.items.sknlyReward = action.payload
        },

        removeSknlyRewards: (
            state,
        ) => {
            state.items.sknlyReward = undefined;
        }

    },
})

export const {
    // Single Items Functions
    addSingleItem,
    removeSingleItem,
    setSingleItemQty,

    // Bundles Items Functions
    updateBundleSize,
    addBundleProduct,
    removeBundleProduct,
    removeBundle,
    addBundleGiftBox,
    removeBundleGiftBox,
    updateBundleGiftBoxMessage,

    // shippingOprions Fx
    changeShippingOption,

    // Payment Fx
    changeCodStatus,

    // reset cart
    resetCart,

    // Sknly Rewards
    addSknlyReward,
    removeSknlyRewards,
    
} = cartSlice.actions;
export default cartSlice.reducer;