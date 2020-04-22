import React from 'react';
import '../Style.css';

const ChannelItem = props => {
    const {
        data
    } = props;

    
    return (
        <a href={"https://www.youtube.com/channel/" + data.id.channelId} className="noDec" style={{width: "100%"}}>
            <div className="WrapperItem">
                <img className="ChannelItemImg" src={data.snippet.thumbnails.medium.url} alt={"channelItem" + data.id.channelId + "-pic"}/>
                <div className="WrapperItemInfo">
                    <p><b>{data.snippet.title}</b></p>
                    <p>{data.snippet.description}</p>
                </div>
            </div>
        </a>
    );
}

export default ChannelItem;