import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


interface BookState {
    bookUrl: string
}

const initialState: BookState = {
    bookUrl: "",
}


export const BookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBook: (state, action: PayloadAction<string>) => {
            // get book logic goes here 
            // This sets the book url to load the EPUB file. 
            state.bookUrl = action.payload
        }
    },
})

export const { getBook } = BookSlice.actions
