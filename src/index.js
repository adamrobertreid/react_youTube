//Import React as JavaScript module and component
//need to make sure this file has access to react.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//import code, need to give file reference to component - relative path
import SearchBar from './components/search_bar'; // importing searchbar from component
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyALK8sqswn95JrDkmgWK8b-EqltGyDpiUE'; // youtube api key



 // create a new component. This component should produce HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos }) in ES6
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


 // Take this component's generated HTML and put it
 //on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
