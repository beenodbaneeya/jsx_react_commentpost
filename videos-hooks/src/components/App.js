import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');


    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

     //anytime  useVideos hook bata ayeko new list of videos bata tyo first video 
     //select garera dekhaune
        

    
  

    return (
        //onFormSubmit chai prop name ho hamile afno wish aunsar lekhna milxa   
        <div className="ui container">
            
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={selectedVideo} /></div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={setSelectedVideo}       
                            videos={videos}/>
                    </div>
                    
                    

                </div>
                
            </div>
            
            
                      
        </div>
    );
};



export default App;




//1.
//Hami sanga React Application xa jasle Axios library use garxa
//Ani axios le chai network request garxa over to the Youtube API
//ani Youtube api bata chai list of video(array of objects) auxa screen ma show garna lai
//where every object represents a different video

//AIzaSyALyZ3wzn5OWUWr_vCofDevhetHXuu4OR4