import React from 'react';
import VideoItem from './VideoItem';


//(videos) ko sato paile (props) pass gareko but tala access
//garda props.videos.length garnu parne bhayera sidai destructure garera
// ({videos}) lekheko
const VideoList = ({videos, onVideoSelect}) => {
    //videos array ma map lagaune(with single argument i.e video) ani inner function call garne
    //inner function will be called one time for every object inside the array
        const renderedList = videos.map((video) =>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;

    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;