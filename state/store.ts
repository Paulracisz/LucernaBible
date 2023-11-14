import { configureStore } from "@reduxjs/toolkit"
import { BookSlice } from "./reducers/booksReducer"


export const store = configureStore({
    reducer: {
        book: BookSlice.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
