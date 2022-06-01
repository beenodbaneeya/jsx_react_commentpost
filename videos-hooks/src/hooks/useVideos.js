import { useState, useEffect } from "react";
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async term => {
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
        setVideos(response.data.items);
        

    };

    return [videos, search];

};

export default useVideos;