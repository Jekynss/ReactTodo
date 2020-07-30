import React from 'react'

import '../styles/components/SearchString.css'

class SearchComponent extends React.Component {

    handleChange=(e)=>{
        this.props.setSearchString(e.target.value);
    }

    render(){
        return(
            <form className="search-form" id="search-form" onSubmit={this.handleSubmit}>
            <div className="input-search__icon">
                >
            </div>
            <input
              type="text"
              name="search_string"
              className="search_string"
              placeholder="Search..."
              onChange={this.handleChange}
            />
        </form>
        )
    }
}

export default SearchComponent;