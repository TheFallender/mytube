import React, {useEffect} from 'react';
import youtube, {baseParams} from '../../apis/youtube';
import VideoSidebar from '../video/videoSidebar';
import '../Style.css';

const VideoDetail = props => {
    /*##################### HOOOKS #####################*/
    //Response from the recomendations
    const [recommendations, setRecommendations] = React.useState("");
    //Response from the video info
    const [videoInfo, setVideoInfo] = React.useState("");

    //Props
    const {
        id,
        clickedOnVideo,
    } = props;

    //Get the recommendations
    const getRecommendations = () => {
        youtube.get('/search', {
            params: {
                ...baseParams,
                type: "video",
                relatedToVideoId: id
            }
        }).then(response => {
            setRecommendations(<VideoSidebar data={response.data.items} clickedOnVideo={clickedOnVideo}/>);
        });
    }

    //Get the video info
    const getVideoData = () => {
        youtube.get("/videos", {
            params: {
                ...baseParams,
                id: id
            }
        }).then(response => {
            setVideoInfo(response.data.items[0]);
        });
    }

    //Only run when the component is mounted
    useEffect(() => {
        getVideoData();
        getRecommendations();
        // eslint-disable-next-line
    }, [id]);

    //Render
    return (
        <div className="VideoDetail">
            <div className="VideoSection">
                <iframe
                    title="VideoPlayer"
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                />
                {videoInfo !== "" ?
                    <div className="VideoInfo">
                        <p><b>{videoInfo.snippet.title}</b></p>
                        <a href={"https://www.youtube.com/channel/" + videoInfo.snippet.channelId} className="noDec" style={{width: "100%", color: "red"}}>
                            {videoInfo.snippet.channelTitle}
                        </a>
                        <p>Published at: {videoInfo.snippet.publishedAt}</p>
                        <p>{videoInfo.snippet.description}</p>
                    </div>
                    :
                    null
                }
            </div>
            <div className="Recommendations">
                {recommendations}
            </div>
        </div>
    );
}

export default VideoDetail;

