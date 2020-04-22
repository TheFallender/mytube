import React from 'react';
import VideoItem from '../videoList/videoItem'
import '../Style.css';

const VideoSidebar = props => {
    //Props
    const {
        data,
        clickedOnVideo
    } = props;

    //Videos
    let videos = data.map(element =>
        <VideoItem
            key={"videoItem" + element.id.videoId}
            data={element}
            clickedOnVideo={clickedOnVideo}
            showDescription={true}
        />
    );

    //Return videos without description
    return (
        <div className="VideoSidebar">
            {videos}
        </div>
    );
}

export default VideoSidebar;