import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


interface BookState {
    bookData: Record<string, any>,
}

const initialState: BookState = {
    bookData: {},
}


export const BookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBook: (state, action: PayloadAction<string>) => {
            // get book logic goes here 
            // this import isnt working, Maybe try EPUB files instead of JSON 
            const book = import(action.payload)
            state.bookData = book
            console.log(state.bookData, "book data")
        }
    },
})

export const { getBook } = BookSlice.actions
