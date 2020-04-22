import React from 'react';
import '../Style.css';

const VideoItem = props => {
    const {
        data,
        clickedOnVideo,
        showDescription,
    } = props;

    return (
        <div className="WrapperItem" onClick={() => clickedOnVideo(data.id.videoId)}>
            <img className="VideoItemImg" src={data.snippet.thumbnails.medium.url} alt={"videoItem" + data.id.videoId + "-pic"}/>
            <div className="WrapperItemInfo">
                <p><b>{data.snippet.title}</b></p>
                <label>Channel: </label>
                <a href={"https://www.youtube.com/channel/" + data.snippet.channelId} className="noDec" style={{width: "100%", color: "red"}}>
                    {data.snippet.channelTitle}
                </a>
                {!showDescription ? <p>{data.snippet.description}</p> : null}
                <p>Published at: {data.snippet.publishedAt}</p>
            </div>
        </div>
    );
}

export default VideoItem;