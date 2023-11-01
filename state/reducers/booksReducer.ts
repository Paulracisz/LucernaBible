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
            // this import isnt working, Maybe try EPUB files instead of JSON 
            state.bookUrl = action.payload
        }
    },
})

export const { getBook } = BookSlice.actions
