import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import * as FileSystem from "expo-file-system"


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
            let book;
            async function resolveBookUri() {


                /* - ---------------------------------------------------------------------------------------------------------------------
                   |              This Reducer isnt working yet                                                                          |
                   |                                                                                                                     |
                   |  I am pretty sure this is the right idea though                                                                     |
                   |  What this is doing is this is fetching the book uri from the local device                                          |
                   |  storage and returning the string to it. If you check in the @epubjs-react-native library                           |
                   |  inside of the Reader.tsx component, they are checking if there is an fsUri, which checks if the                    |
                   |  string starts with file:/// which is what is returned when fetching the book uri from the documentDirectory        |
                   |                                                                                                                     |
                   |                                                                                                                     |
                   |                                                                                                                     |
                   -----------------------------------------------------------------------------------------------------------------------
     
                 */

                book = await FileSystem.getContentUriAsync(FileSystem.documentDirectory + action.payload)
                    .then(uri => {
                        console.log(uri)
                    }).then(data => {
                        return data
                    })
                return book
            }
            resolveBookUri()
            return book
        }
    },
})

export const { getBook } = BookSlice.actions
