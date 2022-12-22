import { configureStore, createSlice , PayloadAction} from "@reduxjs/toolkit";
import { InitiatState } from "../Types";
import { getHommePageVideos } from "./reducers/getHomePageVideos";

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
    extraReducers:(builder) =>{
        builder.addCase(getHommePageVideos.fulfilled, (state,action)=>{
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken
        })
    },
})

export const store = configureStore({
    reducer:{
        youtubeApp:YouTubeSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;