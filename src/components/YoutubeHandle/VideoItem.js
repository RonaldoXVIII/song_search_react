import React from 'react';

const VideoItem = ({video,handleVideoSelect}) => {

    const listStyle = {
        listStyle:"none",
    }
    const itemCajaScroll = {
        border:"10px 10px 10px 10px",
        width: "300px",
        height: "150px",
        margin: "0 10px 0 0",
        padding: "0",
        display: "inline-block",
        marginRight: "50px",
        cursor:"pointer"
    }
    
    const infoItem = {
        width:" 50px",
        background: "0000",
        wordBreak: "break-all",
        font: "small-caption",
    }

    const imageItem = {
        borderRadius : "15px",

    }

    let titleShort = video.snippet.title.substring(0,50)

    return (
        <li className="text" style={listStyle} >
            <div style={itemCajaScroll} onClick={()=> handleVideoSelect(video)}>
                <img style={imageItem} src = {video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div>
                    <div style={infoItem}>{titleShort}</div>
                </div>
            </div>
        </li>
        
    )
}

export default VideoItem;