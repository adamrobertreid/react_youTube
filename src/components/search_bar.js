import React, { Component } from 'react';   // import react from react


class SearchBar extends Component{
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;    //any component that imports searchbar will so from here
