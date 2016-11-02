import React, { Component } from 'react';   // import react from react


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
}


render() {
    return (
    <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;    //any component that imports searchbar will so from here
