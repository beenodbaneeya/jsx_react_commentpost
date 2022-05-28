import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    //state initialize garera property chai videos deko ani default chai empty array deko
    state = {videos: [] , selectedVideo: null };
    //onTermSubmit bhanera name rakheko uta SearchBar componenet
    //ma state bhitra term xa tei bhayera terminology miluana
    componentDidMount(){
        this.onTermSubmit('love');
    }
    onTermSubmit = async term => {
        //youtube.get chai axios ma pre config gareko method ho
        //q bhanera search query deko youtube api call garna lai 
        //documentation ma q lekhne bhanera
        //
      const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });

        //api fetch garera tya response ma ayeko kura ko data bhitra ko item
        //access garera state update gareko

        this.setState({
            videos:response.data.items,
            selectedVideo: response.data.items[0]
            //video search garda tya ko first video liyera default video set gareko items[0] rakhera
        });

    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };
    //mathi api call gareko asynchronous operation bhayera hamile async await use garna parxa
    //arrow function chai async  ho tei bhayera term ko agadi async lekheko
    //api request ko agadi chai await lekhne ani teslai response variable ma assign garne
    render(){
        return (
            //onFormSubmit chai prop name ho hamile afno wish aunsar lekhna milxa   
            <div className="ui container">
                
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                        <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div>
                        
                        

                    </div>
                    
                </div>
                
                
                          
            </div>
        );
    }
}

export default App;




//1.
//Hami sanga React Application xa jasle Axios library use garxa
//Ani axios le chai network request garxa over to the Youtube API
//ani Youtube api bata chai list of video(array of objects) auxa screen ma show garna lai
//where every object represents a different video

//AIzaSyALyZ3wzn5OWUWr_vCofDevhetHXuu4OR4