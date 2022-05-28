import React, { useState, useEffect } from "react";
import axios from 'axios';


const Convert = ({ langauge, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };



    }, [text]);

    useEffect(() => {
        //useEffect lai async await dina namilera helper function
        // doTranslation create gareko ani tya bata ako response 
        // lai data bhanera destructure gareko.teshpaxi useState hook
        //setTranslated ma tyo data ma ayeko data.data.translation[0].translatedText
        //ma chai hamile khojeko result xa
        const doTranslation = async () => {
           const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:debouncedText,
                    target: langauge.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslated(data.data.translations[0].translatedText);

        };

        doTranslation();
    }, [langauge, debouncedText]);


    return (
        <div>
            <h1 className="ui header">{translated}</h1>

        </div>
    );
};

export default Convert;