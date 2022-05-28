import './VideoItem.css';
import React from 'react';


//eha pani (props) ma sabai video object hunxa
//but hami lai tya video object ko bhitra ko kura access garna 
//destructure garera video lekhne
const VideoItem = ({video, onVideoSelect}) => {
    return (
        //eha bhako sabai className chai semantic-ui.com ko list bhitra ko
        //example bata leko

        //()=> onVideoSelect(video) ko explanation tala xa in 1.
        <div onClick={() => onVideoSelect(video)} className="video-item item"> 
            <img 
                alt={video.snippet.title}
                className="ui image" 
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                
            </div>
            
        </div>

    );
};

export default VideoItem;



//1.
//Video item ma kun chai item click bhako bhanera tesko descritption pathauna app.js
// ma selectVideo bhanne state initialize gareko with null
//ani onVideoSelect bhanera prop pathako VideoList.js ani tya bata feri 
//tesko child VideoItem.js ma
//finally onClick() method call garda onVideoSelect method call hunxa ani
//teshma ma parameter chai video hunxa jasle garda kun chai ho tani video 
//click bhako bhanera exact thaha hunxa.
//parent bata child ma info pathuana props hunxa bhane child
//bata parent lai pathuana callBack use hunxa