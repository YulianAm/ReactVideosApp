import React from 'react';


export default class SearchBar extends React.Component {
    
    
    state = { term: "" };

   onInputChange = e => {   
       this.setState({ term: e.target.value })
   }

   onFormSubmit = e => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);

   }

    render() {
        return (
            <div className="search-bar ui segment" style={{ margin: "3vh"}}>
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                    <label>Video Search</label>
                    <input 
                    value={this.state.term} 
                    type="text"
                    onChange={ this.onInputChange }
                    />
                    </div>
                </form>  
             </div>
        )
    }
}

