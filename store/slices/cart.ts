import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SingleProductCartItem = {
    id: string,
    name: string,
    price: number,
    image: string,
    qty: number,
}

export type CartItems = {
    bundle?: {
        items: SingleProductCartItem[],
    },
    singleItems: SingleProductCartItem[],
}

type CartState = {
    items: CartItems,
}

const initialState: CartState = {
    items: {
        singleItems: [],
    },
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

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
        }
    },
})

export const {
    addSingleItem,
    removeSingleItem,
} = cartSlice.actions;
export default cartSlice.reducer;