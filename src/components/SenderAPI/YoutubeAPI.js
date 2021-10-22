import axios from 'axios';

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = "" //Inser here your Youtube Api Key

export default axios.create({
    baseURL:YOUTUBE_PLAYLIST_ITEMS_API,
    params:{
        part:'snippet',
        maxResults: 7,
        key: YOUTUBE_API_KEY
    }
    
})