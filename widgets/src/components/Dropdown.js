import React, { useEffect, useState, useRef } from "react";


//dropdown banda garnu parxa addEventListener garepaxi
//natra bhane ref banda bhayesi null lai call garxa ani error
//auxa.So clean up function lekhna parxa
const Dropdown = ({ label,options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();


    useEffect(() =>{
       const onBodyClick = (event) =>{
        if (ref.current.contains(event.target)){
            return;
        }
        setOpen(false);
        }; 

        document.body.addEventListener('click', onBodyClick );

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);


    const renderedOptions = options.map((option) =>{
        //jun option select garyo teslai tala list ma nadekhauna lai
        //option.value sanga compare garyo ani equal bhayo bhane null return garyo
        //jasko matlab chai kei render nagarne ho react ma
        if(option.value === selected.value){
            return null;
        }
        return (
            //yo tala ko div ma click garda esle onSelectedChange call garxa current option rakhera
            //ani uta app.js ma chai onSelectedChange bhaneko setSelected function lai call garxa
            //jasle feri selected piece of state lai update garera app component lai rerender garauxa
            //ani newly selected option pass garauxa.tespaxi Dropdown component le newly selected option linxa as a prop
            //ani rerender garxa afulai ani show garxa newly selected label property lai yo<div
            //className="text">{selected.label} garera dekhauxa
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );

    });

    console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={()=> setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon">

                    </i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;