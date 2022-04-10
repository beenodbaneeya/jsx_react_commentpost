import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //props bhitra ko images access garda for each lagayera map gareko jasto ho tala ko line
    //jasma (image) lekhnu ko karan chai baira j ko list xa tesko singular form lekheko jasto gareko 
    const images = props.images.map(image => {
        // const images = props.images.map((image) => {
        //list of components bata data fetch garera key attach garne ho bhane
        //root elemt ma key={}bhanera lekhna parxa..edi img lai div le wrap gareko bhaye
        //key chai div ma hunthyo
        return <ImageCard  key={image.id} image={image} />

        // return <img alt={image.description} key={image.id} src={image.urls.regular} />
        // esari 3 choti samam image ayo tei bahyera mathiko (image)lai destrcuture garera lekheko
    });

    return <div className="image-list">{images}</div>;

};

export default ImageList;