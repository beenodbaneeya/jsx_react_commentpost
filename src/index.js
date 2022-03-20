// import the React and React-Dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// function getButtonText(){
//     return 'Click on me!';
// }

//create a react component
const App = () => {
    const buttonText = { text: 'Click Me!' };
    const labelText = 'Enter Name:';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white', border: '1px solid black' }}>{buttonText.text}</button>

        </div>
    );

};

//take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')

);
