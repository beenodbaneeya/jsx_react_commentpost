import React from "react";

class SearchBar extends React.Component{
    //term ko sato ma j pani lekhna milxa term chai short form of searchterm
    //bhayera testo lekheko 
    state = {term: ''};
    //event call back bhayera arrow function le define gareko jo chai event objectle call hunxa
    onInputChange = event => {
        this.setState({ term:event.target.value});


    };

    onFormSubmit = event => {
        event.preventDefault();

        //hamro parent component ko method callback gareko 
        //parameter this.state.term pathayera jasle current searchterm dinxa
        this.props.onFormSubmit(this.state.term);


    };
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            video Search
                        </label>
                        <input 
                            type="text" 
                            //this.state.term garera value ma state rakheko
                            value={this.state.term}
                            //this.onInputChnage chai method banayeko mathi
                            onChange={this.onInputChange}
                        />

                    </div>

                </form>

            </div>
        );
    }

}

export default SearchBar;