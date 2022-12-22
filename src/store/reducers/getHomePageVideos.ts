import {createAsyncThunk} from '@reduxjs/toolkit'
import { RootState } from '..'
import axios from 'axios'
import { YOUTUBE_API_URL } from '../../utils/constants'
import { parseData } from '../../utils'
import { HomePageVideos } from '../../Types'


const API_KEY = "AIzaSyA-xjgxE6SmwAEpupqeGHKzrBHBZENdJ-M"

export const getHommePageVideos = createAsyncThunk("youtubeApp/homePageVideos", 

async (isNext:boolean, {getState})=>{
    const {
        youtubeApp: {nextPageToken:nextPageTokenFromState, videos},
    } = getState() as RootState
    const {data:{items,nextPageToken}, 
} = await axios.get(
    `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video`
)
const parsedData:HomePageVideos[] = await parseData(items)

return {parsedData:[...videos, ...parsedData],nextPageToken}
}

)