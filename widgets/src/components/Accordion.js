import React, {useState} from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);



    const onTitleClick = (index) => {
        setActiveIndex(index);
    };
    //list of items lai liyera render garne list jasari using mapping function
    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        //tala return <div key ={item.title} rakhda duita border ayo kina bhane extra element thyo. so React.Fragment use gareko
        return <React.Fragment key={item.title}>
            
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}

            >
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    });

    return <div className='ui styled accordion'>
        {renderedItems}
    </div>;
};

export default Accordion;