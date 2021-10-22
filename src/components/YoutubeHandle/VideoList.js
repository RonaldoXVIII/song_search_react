import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,handleVideoSelect}) =>{
    const renderedVideos = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
    });



    const cajaScroll = {
        width: "auto",
        height: "300px",
        padding: "40px",
        whiteSpace: "nowrap",
        display: "flex",
        overflow: "auto",
        background: "#546380",
        scrollDirection:"horizontal"
    }

    return (<div>
                <ul style={cajaScroll}>
                   {renderedVideos}
                 </ul>
        </div>)
}

export default VideoList;