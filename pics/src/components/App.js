import { render } from '@testing-library/react';
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    //image tandai xam tei bhayera state ko name images rakhdeko ani empty array deko
    //kine bhane paxi map garera show garna lai ,(null athawa empty string) diyo bhane paxi map 
    //function lagaunda mildaina ni tah :P ehehehehe
    state = { images: [] };


    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        });
        //1.One way to get the response when there is using promise based syntax like below to get the data but we use async await which is more simple
        // .then(response => {
        //     console.log(response.data.results);

        // });

        //aba network request garera ayepaxi setState garera state ko images lai data provide garne
        //yo garda this le onSubmit lai call garxa ani error auxa
        //teslai handle garen 3ota tarika hunxa euta .bind method use garne 
        //arko chai tala SearchBar bhitra ko onSubmit bhitra ko object lai arrow function dine
        //arko chai: async onSearchSubmit(term)
        //yesto bhayeko onSearchSUbmit method lai arrow function dine like above

        this.setState({ images: response.data.results });


    }





    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;





//1.
//axios le chai professional tarika le data fetch garna milxa,3rd party library ho,,,sabai kura
//handle gardinxa but fetch use garyo bhane chai afaile dherai code lekhna parxa
//so fetch use nagarne axios run garne install garera
//install garna lai chai : project folder ma gayera => npm install --save axios

//2.
//hamle create gareko file bhanda import gareko third party or dependencies xa bhane
//hamle create gareko bhanda mathi lekhe suru ma import garda
