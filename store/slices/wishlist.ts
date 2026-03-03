import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type WishlistState = {
    items: {
        productId: string,
    }[],
}

const initialState: WishlistState = {
    items: [],
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addProduct: (
            state,
            action: PayloadAction<{
                productId: string,
            }>,
        ) => {

            if (!action.payload.productId) {
                throw new Error("Product id is required.")
            }

            state.items = [...state.items, { productId: action.payload.productId }];
        },

        removeProduct: (
            state,
            action: PayloadAction<{
                productId: string,
            }>
        ) => {
            if (!action.payload.productId) {
                throw new Error("Product id is required.")
            }

            state.items = state.items.filter(p => p.productId !== action.payload.productId);
        }
    }
})

export const {
    addProduct,
    removeProduct,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;