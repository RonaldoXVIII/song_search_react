import React from 'react'

 const VideoDetail = ({video}) => {
    const videoPlayer = {
        display : "flex",
        justifyContent: "center",
        marginTop: "60px",
        marginBottom: "60px"
    }



    if(!video)
    {
        return <div>
            <h1>Enter search keyword to load ...</h1>
            <br></br>
        </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));

    return (
        <div >
            {console.log(video.id.videoId)}
            <div style={videoPlayer} >
            <iframe width="853" height="480" src={videoSrc} frameBorder="0" allowFullScreen ng-show="showvideo" title="Video Player"></iframe>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}


export default VideoDetail