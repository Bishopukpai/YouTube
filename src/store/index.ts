import { configureStore, createSlice , PayloadAction} from "@reduxjs/toolkit";
import { InitiatState } from "../Types";

const initialState:InitiatState = {
    videos:[],
    currentPlaying:null,
    searchTerm:"",
    searchResults:[],
    nextPageToken: null,
    recommendedVideos: []
}

const YouTubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{},
})

export const store = configureStore({
    reducer:{
        youtubeApp:YouTubeSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;