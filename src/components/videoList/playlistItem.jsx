import React from 'react';
import '../Style.css';

const PlaylistItem = props => {
    const {
        data
    } = props;

    return (
        <a href={"https://www.youtube.com/playlist?list=" + data.id.playlistId} className="noDec" style={{width: "100%"}}>
            <div className="WrapperItem">
                <img className="PlaylistItemImg" src={data.snippet.thumbnails.medium.url} alt={"playlistItem" + data.id.playlistId + "-pic"}/>
                <div className="WrapperItemInfo">
                    <p><b>{data.snippet.title}</b></p>
                    <label>Channel: </label>
                    <a href={"https://www.youtube.com/channel/" + data.snippet.channelId} className="noDec" style={{width: "100%", color: "red"}}>
                        {data.snippet.channelTitle}
                    </a>
                    <p>{data.snippet.description}</p>
                </div>           
            </div>
        </a>
    );
}

export default PlaylistItem;