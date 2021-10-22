import React  from 'react'
import { SongSearch } from './song_searcher/SongSearch'
import YoutubeHandle from './YoutubeHandle/YoutubeHandle'
//import WeatherHandle from './Weather/WeatherHandle'





const App = () => {
    return (
        <div>
            <YoutubeHandle/>
            <SongSearch/>
        </div>
    )
}

export default App
