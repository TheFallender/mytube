import React, {useState, useEffect} from 'react';
import Header from './components/header/header'
import VideoList from './components/videoList/videoList';
import VideoDetail from './components/video/videoDetail';
import './App.css';
import './components/Style.css'


function App() {
	/*##################### HOOOKS #####################*/
	//Manage player ID selected (also controls the view)
	const [videoData, setVideoData] = useState("");
	const clickedOnVideo = (data) => {
		setVideoData(data);
	}

	//Response from the search bar
	const [response, setResponse] = useState("");
	//Update Response
	const updateResponse = (data) => {
		setResponse(data);
		setVideoData("")
	}

	//State of view
	const [view, setView] = useState(<p>Search Something!</p>);
	//Check for changes in the videoData and response
	useEffect(() => {
		//View Default
		setView(response !== "" ?
			<VideoList data={response.data.items} clickedOnVideo={clickedOnVideo}/>
			:
			<div style={{overflow: "auto"}}>
				<p style={{textAlign: "center"}}>Search Something!</p>
			</div>
		);
		//PlayerView
		if (videoData !== "") {
			setView(<VideoDetail id={videoData} clickedOnVideo={clickedOnVideo}/>);
		}
		window.scrollTo(0, 0);
	}, [videoData, response]);

	//Return
	return (
		<div className="App">
			<Header updateResponse={updateResponse} clickedOnVideo={clickedOnVideo}/>
			<div className={videoData === "" ? "Content" : "ContentPlayer"}>
				{view}
			</div>
		</div>
	);
}

export default App;