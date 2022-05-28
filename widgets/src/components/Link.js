import React from "react";



//.....1......//
const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        //........2....//
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        //....3....//
        event.preventDefault();
        window.history.pushState({}, '', href);
        //...4......//
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        //..5....//
        
    };

     return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
     );
};

export default Link;









//........comments..........
//..........1.............//
    //link le normal Link dekhauxa screen ma but special 
    //logic execute garxa whenever user clicks on it

//........2.........//
    //tyo link lai ctrl dabayera click garyo bhane new tab ma kholna lai 
    //return early garne event.preventDefault haru nagari.

//........3.......//
    //event.preventDefault le chai full page reload huna didaina taki  
    //thorai network cal hos

//........4......//
        //window.history.pushState le bookmark garepaxi jun link ma click garyo
        //tei anusar URL update garauna madat garxa

//.....5..........//
    //dropdown components lai data change bhayo bhanera bhanne code matra ho mathi ko
        //nothing to worry about much





    