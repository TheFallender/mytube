import React, { useEffect } from 'react';
import VideoItem from './videoItem'
import ChannelItem from './channelItem';
import PlaylistItem from './playlistItem';
import '../Style.css';
import Wrapper from './wrapper';

const VideoList = props => {
    //Props
    const {
        data,
        clickedOnVideo
    } = props;

    const [wrapper, setWrapper] = React.useState(null);

    //JSX for the types
    useEffect(() => {
        //Temp
        let videoAux = [];
        let channelAux = [];
        let playlistsAux = [];

        //Group by
        data.forEach(element => {
            switch (element.id.kind) {
                case "youtube#video":
                    videoAux.push(element);
                    break;
                case "youtube#channel":
                    channelAux.push(element);
                    break;
                case "youtube#playlist":
                    playlistsAux.push(element);
                    break;
                default:
                    console.log("ERROR");
                    break;
            }
        });

        //Videos
        if (videoAux) {
            videoAux = videoAux.map(element =>
                <VideoItem
                    key={"videoItem" + element.id.videoId}
                    data={element}
                    clickedOnVideo={clickedOnVideo}
                />
            );
            videoAux = 
                <div className="WrapperContainer">
                    {videoAux}
                </div>
        }

        //Channels
        if (channelAux) {
            channelAux = channelAux.map(element =>
                <ChannelItem
                    key={"channelItem" + element.id.channelId}
                    data={element}
                />
            );
            channelAux = 
                <div className="WrapperContainer">
                    {channelAux}
                </div>
        }

        //Playlists
        if (playlistsAux) {
            playlistsAux = playlistsAux.map(element =>
                <PlaylistItem
                    key={"playlistItem" + element.id.playlistID}
                    data={element}
                />
            );
            playlistsAux = 
                <div className="WrapperContainer">
                    {playlistsAux}
                </div>
        }

        //Wrapper elements
        setWrapper(
            <div className="VideoListWrappers" style={{width: "100%", height: "100%"}}>
                <Wrapper components={channelAux} name="Channels"/>
                <Wrapper components={videoAux} name="Videos"/>
                <Wrapper components={playlistsAux} name="Playlists"/>
            </div>
        )

        // eslint-disable-next-line
    }, [data]);


    return (
        <div className="VideoList">
            {wrapper ?
                wrapper
                :
                null
            }
        </div>
    );
}

export default VideoList;